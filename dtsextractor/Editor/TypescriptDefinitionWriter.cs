using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System;

namespace TypescriptDefinitionWriter
{
    public class TypescriptDefinitionWriterException : Exception
    {
        public TypescriptDefinitionWriterException()
        {
        }

        public TypescriptDefinitionWriterException(string message)
        : base(message)
        {
        }

        public TypescriptDefinitionWriterException(string message, Exception inner)
        : base(message, inner)
        {
        }
    }

    public class TypescriptDefinitionWriter
    {
        static char[] SpecialCharacters = "<>$".ToCharArray();
        List<Type> GetCLRTypes(Assembly assembly)
        {
            var types = new List<Type>();
            //foreach (var t in typeof(GameObject).Assembly.GetTypes())
            foreach (var t in assembly.GetTypes())
            {
                if (t.IsSpecialName) continue;
                if (t.IsGenericType) continue;
                if (t.IsGenericTypeDefinition) continue;
                if (typeof(Delegate).IsAssignableFrom(t)) continue;
                if (string.IsNullOrEmpty(t.FullName)) continue;
                if (t.FullName.IndexOfAny(SpecialCharacters) != -1) continue;
                types.Add(t);
            }
            return types;
        }
        Dictionary<string, bool> GetNamespaces(List<Type> ts)
        {
            var nslist = new Dictionary<string, bool>();
            foreach (var t in ts)
            {
                if (t.IsSpecialName) continue;
                if (!string.IsNullOrEmpty(t.Namespace))
                {
                    nslist[t.Namespace] = true;
                }
            }
            return nslist;
        }

        Dictionary<Type, string> typedic;
        string CLRTypeToTSType(Type t)
        {
            string s;
            string tail = "";

            bool cont = true;
            while (cont)
            {
                cont = false;
                if (t.IsArray)
                {
                    tail = "[]" + tail;
                    t = t.GetElementType();
                    cont = true;
                }
                else if (t.IsGenericType && t.GetGenericTypeDefinition() == typeof(List<>))
                {
                    tail = "[]" + tail;
                    t = t.GetGenericArguments()[0];
                    cont = true;
                }
                else if (t.IsGenericType && t.GetGenericTypeDefinition() == typeof(IList<>))
                {
                    tail = "[]" + tail;
                    t = t.GetGenericArguments()[0];
                    cont = true;
                }
            }

            if (typedic.TryGetValue(t, out s))
            {
                return s + tail;
            }
            if (t.IsSubclassOf(typeof(MulticastDelegate)))
            {
                var mi = t.GetMethod("Invoke");
                var ps = mi.GetParameters();
                var r = mi.ReturnType;
                var rt = CLRTypeToTSType(r);
                return string.Format("(({0}) => {1}){2}",
                    string.Join(", ", ps.Select(e => e.Name + (IsJSKeyword(e.Name) ? "_" : "") + ": " + CLRTypeToTSType(e.ParameterType)).ToArray()),
                    CLRTypeToTSType(r),
                    tail);
            }
            return "any" + tail;
        }
        void DefineTypeDic(Dictionary<Type, string> typedic, List<System.Type> types)
        {
            foreach (var t in types)
            {
                typedic[t] = t.FullName.Replace("+", ".");
            }
            typedic[typeof(string)] = "string";
            typedic[typeof(sbyte)] = "number";
            typedic[typeof(byte)] = "number";
            typedic[typeof(short)] = "number";
            typedic[typeof(ushort)] = "number";
            typedic[typeof(int)] = "number";
            typedic[typeof(uint)] = "number";
            typedic[typeof(long)] = "number";
            typedic[typeof(ulong)] = "number";
            typedic[typeof(float)] = "number";
            typedic[typeof(double)] = "number";
            typedic[typeof(decimal)] = "number";
            typedic[typeof(object)] = "any";
            typedic[typeof(void)] = "void";
            typedic[typeof(bool)] = "boolean";
        }
        void MakeTypeDic(List<System.Type> types)
        {
            typedic = new Dictionary<Type, string>();
            DefineTypeDic(typedic, types);
        }
        static string TypeToPath(Type t)
        {
            var path = t.FullName.Replace("+", ".");
            return path;
        }
        static Dictionary<string, string> JSkeywords;
        static bool IsJSKeyword(string str)
        {
            if (JSkeywords == null)
            {
                var jskeywords = "abstract arguments boolean break byte case catch char class* const continue debugger default delete do double else enum* eval export* extends* false final finally float for function goto if implements import* in instanceof int interface let long native new null package private protected public return short static super* switch synchronized this throw throws transient true try typeof var void volatile while with yield";
                JSkeywords = jskeywords.Split(' ').ToDictionary(e => e);
            }
            return JSkeywords.ContainsKey(str);
        }
        public Dictionary<string, string> MakeDefineFile(Assembly[] assemblies)
        {
            var ret = new Dictionary<string, string>();
            var types = assemblies.Select(e => GetCLRTypes(e)).SelectMany(e => e).ToList();
            var tdic = new Dictionary<Type, bool>();
            Action<System.Type> tf = null;
            tf = (t) =>
            {
                if (t == null) return;
                tdic[t] = true;
                tf(t.BaseType);
            };
            types.ForEach(e => tf(e));
            var ignoredType = new HashSet<Type>
            {
            };
            ignoredType.ToList().ForEach(e => tdic.Remove(e));
            types = tdic.Keys.Where(e => e != null && !e.IsArray).ToList();

            MakeTypeDic(types);
            foreach (var t in types)
            {
                var typePath = TypeToPath(t);
                string ns = "";
                if (typePath.LastIndexOf('.') != -1)
                {
                    ns = typePath.Substring(0, typePath.LastIndexOf('.'));
                }
                var sb = new System.Text.StringBuilder();
                if (!string.IsNullOrEmpty(ns))
                    sb.AppendFormat("declare namespace {0} {{\n", ns);
                var bt = t.BaseType;
                if (ignoredType.Contains(bt)) bt = null;
                if (bt == null || bt.IsGenericType)
                {
                    sb.AppendFormat("  class {0} {{\n", t.Name);
                }
                else
                {
                    sb.AppendFormat("  class {0} extends {1} {{\n", t.Name, TypeToPath(t.BaseType));
                }

                //constructors
                //sb.AppendFormat("    // constructors\n");
                bool anyCtor = false;
                foreach (var m in t.GetConstructors(
                    BindingFlags.Public |
                    BindingFlags.Static |
                    BindingFlags.DeclaredOnly |
                    BindingFlags.Instance))
                {
                    if (t.IsValueType)
                        continue;
                    if (m.IsGenericMethod)
                        continue;
                    anyCtor = true;
                    var ps = m.GetParameters();
                    sb.AppendFormat("    constructor(");
                    bool first = true;
                    foreach (var p in ps)
                    {
                        if (!first)
                        {
                            sb.Append(", ");
                        }
                        var pt = p.ParameterType;
                        var name = p.Name;
                        if (IsJSKeyword(name))
                            name = name + "_";
                        sb.AppendFormat("{0}{2}: {1}", name, CLRTypeToTSType(pt), p.IsOptional ? "?" : "");
                        first = false;
                    }
                    sb.AppendFormat(");\n");
                }
                if (!anyCtor)
                {
                    // deny new
                    sb.AppendFormat("    protected constructor();\n");
                }

                Action<MethodInfo> writeMethod = (m) =>
                {
                    if (m == null)
                        return;
                    var ps = m.GetParameters();
                    var fname = m.Name;
                    if (IsJSKeyword(fname))
                        fname = "\"" + fname + "\"";
                    sb.AppendFormat("    {1}{0}(", fname, m.IsStatic ? "static " : "");
                    bool first = true;
                    foreach (var p in ps)
                    {
                        if (!first)
                        {
                            sb.Append(", ");
                        }
                        var pt = p.ParameterType;
                        var name = p.Name;
                        if (IsJSKeyword(name))
                            name = name + "_";
                        sb.AppendFormat("{0}{2}: {1}", name, CLRTypeToTSType(pt), p.IsOptional ? "?" : "");
                        first = false;
                    }
                    var rettype = CLRTypeToTSType(m.ReturnType);
                    sb.AppendFormat("): {0};\n", rettype);
                };
                //methods
                //sb.AppendFormat("    // methods\n");
                var bindflag = BindingFlags.Public |
                    BindingFlags.Static |
                    BindingFlags.DeclaredOnly |
                    BindingFlags.Instance;
                if (t.BaseType != null && t.BaseType.IsGenericType)
                    bindflag ^= BindingFlags.DeclaredOnly;

                var allmethods = t.GetMethods(BindingFlags.Public |
                    BindingFlags.Static |
                    BindingFlags.Instance);
                var methods = t.GetMethods(bindflag);
                var methodsDic = new Dictionary<string, bool>(); // declared methods
                var allmethodsDic = new Dictionary<string, List<MethodInfo>>(); // with inherited methods
                foreach (var m in methods)
                {
                    methodsDic[m.Name] = true;
                }
                foreach (var m in allmethods)
                {
                    if (!allmethodsDic.ContainsKey(m.Name))
                    {
                        allmethodsDic[m.Name] = new List<MethodInfo>();
                    }
                    allmethodsDic[m.Name].Add(m);
                }
                foreach (var mname in methodsDic.Keys.OrderBy(e => e))
                {
                    /*
                    if (m.IsGenericMethod)
                        continue;
                    if (m.IsSpecialName) continue;
                    */
                    //if (!t.IsValueType && !m.IsStatic) continue;
                    //if (!t.IsValueType && noPublicConstructor) continue;
                    foreach (var m2 in allmethodsDic[mname].Distinct().OrderBy(e => e.ToString()))
                    {
                        if (m2.IsSpecialName)
                            continue;
                        if (m2.IsGenericMethod)
                            continue;
                        writeMethod(m2);
                    }
                }

                //props
                //sb.AppendFormat("    // properties\n");
                foreach (var m in t.GetProperties(bindflag).OrderBy(e => e.Name))
                {
                    if (m.IsSpecialName) continue;
                    var idxps = m.GetIndexParameters();
                    var gm = m.GetGetMethod();
                    //if (!t.IsValueType && noPublicConstructor) continue;
                    if (idxps.Length > 0)
                    {
                        // indexer property
                        if (gm.IsStatic) continue;
                        var sm = m.GetSetMethod();
                        //sb.AppendFormat("    {1}[index: {2}]: {0};\n", TypeToTSType(m.PropertyType), ro, TypeToTSType(idxps[0].ParameterType));
                        //Debug.Log(path+" "+gm.Name+" "+sm.Name);
                        writeMethod(gm);
                        writeMethod(sm);
                        /*
                        sb.AppendFormat("    get_Item(index: {2}): {0};\n", TypeToTSType(m.PropertyType), ro, TypeToTSType(idxps[0].ParameterType));
                        if (sm != null)
                        {
                            sb.AppendFormat("    set_Item(index: {2}, value: {0}): void;\n", TypeToTSType(m.PropertyType), ro, TypeToTSType(idxps[0].ParameterType));
                        }
                        */
                    }
                    else if (idxps.Length > 1)
                    {
                        throw new TypescriptDefinitionWriterException("property panic!" + typePath);
                    }
                    else
                    {
                        var ro = (m.GetGetMethod() != null && m.GetSetMethod() == null) ? "readonly " : "";
                        var fname = m.Name;
                        if (gm != null)
                        {
                            if (IsJSKeyword(fname))
                                fname = "\"" + fname + "\"";
                            sb.AppendFormat("    {1}{3}{0}: {2};\n", fname, gm.IsStatic ? "static " : "", CLRTypeToTSType(m.PropertyType), ro);
                        }
                    }
                }

                //fields
                //sb.AppendFormat("    // fields\n");
                foreach (var m in t.GetFields(bindflag).OrderBy(e => e.Name))
                {
                    //if (!t.IsValueType && !m.IsStatic) continue;
                    //if (!t.IsValueType && noPublicConstructor) continue;
                    var fname = m.Name;
                    if (IsJSKeyword(fname))
                        fname = "\"" + fname + "\"";
                    sb.AppendFormat("    {1}{0}: {2};\n", fname, m.IsStatic ? "static " : "", CLRTypeToTSType(m.FieldType));
                }

                sb.AppendFormat("  }}\n");
                if (!string.IsNullOrEmpty(ns))
                    sb.AppendFormat("}}\n");
                var data = sb.ToString().Replace("\n", "\r\n").Replace("\r\r", "\r");
                ret[typePath] = data;
            }
            return ret;
        }
    }
}