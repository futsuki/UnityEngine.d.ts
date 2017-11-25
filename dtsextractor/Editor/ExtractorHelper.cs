using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System;
using System.Reflection;
using System.Linq;

public class DTSExtractor : EditorWindow
{
    // Add menu named "My Window" to the Window menu
    [MenuItem("Window/*.d.ts Extractor")]
    static void Init()
    {
        // Get existing open window or if none, make a new one:
        DTSExtractor window = (DTSExtractor)EditorWindow.GetWindow(typeof(DTSExtractor));
        window.Show();
    }

    Assembly[] assemblies;
    string[] assemblyNames = new string[0];
    bool[] assemblySelection = new bool[0];
    //int assemblyIndex;
    Vector2 assemblyScroll;
    GUIStyle buttonStyle;

    void OnGUI()
    {
        EditorGUILayout.BeginVertical();
        GUILayout.Label("d.ts Extractor");
        if (GUILayout.Button("Update Assembly List"))
        {
            assemblies = AppDomain.CurrentDomain.GetAssemblies().OrderBy(e => e.FullName).ToArray();
            assemblyNames = assemblies.Select(e => {
                string s = "";
                try
                {
                    s += System.IO.Path.GetFileName(e.Location) + " ";
                }
                catch (Exception ex)
                {
                    s += "??? ";
                }
                s += "(" + e.GetName().Name + ")";
                return s;
            }).ToArray();
            assemblySelection = new bool[assemblies.Length];
            buttonStyle = null;
        }
        if (GUILayout.Button("Select All UnityEngine.dll assemblies"))
        {
            for (var i = 0; i < assemblyNames.Length; i++)
            {
                if (assemblyNames[i].StartsWith("UnityEngine."))
                {
                    assemblySelection[i] = true;
                }
            }
            buttonStyle = null;
        }
        if (GUILayout.Button("Select All UnityEditor.dll assemblies"))
        {
            for (var i = 0; i < assemblyNames.Length; i++)
            {
                if (assemblyNames[i].StartsWith("UnityEditor."))
                {
                    assemblySelection[i] = true;
                }
            }
            buttonStyle = null;
        }
        if (buttonStyle == null)
        {
            buttonStyle = new GUIStyle(GUI.skin.button);
            buttonStyle.alignment = TextAnchor.MiddleLeft;
        }
        GUILayout.Label("Selected: "+assemblySelection.Count(e => e)+" assemblies", GUI.skin.box);
        /*
        string selectedText;
        if (assemblies != null && assemblyIndex >= 0 && assemblyIndex < assemblies.Length)
        {
            selectedText = "Selected Asssembly: " + assemblyNames[assemblyIndex];
        }
        else
        {
            selectedText = "Selected Asssembly: [not selected]";
        }
        GUILayout.Label(selectedText, GUI.skin.box);
        */
        assemblyScroll = EditorGUILayout.BeginScrollView(assemblyScroll, false, true,
            GUI.skin.horizontalScrollbar, GUI.skin.verticalScrollbar, GUI.skin.box);
        if (assemblies != null)
        {
            for (var i = 0; i < assemblies.Length; i++)
            {
                assemblySelection[i] = GUILayout.Toggle(assemblySelection[i], assemblyNames[i], buttonStyle);
            }
        }
        //assemblyIndex = GUILayout.SelectionGrid(assemblyIndex, assemblyNames, 1, buttonStyle);
        EditorGUILayout.EndScrollView();
        if (GUILayout.Button("Extract"))
        {
            /*
            if (assemblies != null && assemblyIndex >= 0 && assemblyIndex < assemblies.Length)
            {
                if (assemblies[assemblyIndex] != null)
                {
                    Extract(assemblies[assemblyIndex]);
                }
            }
            */
            Extract(assemblies.Where((e, i) => assemblySelection[i]).ToArray());
        }
        EditorGUILayout.EndVertical();
    }

    void Extract(Assembly[] ass)
    {
        var f = EditorUtility.SaveFilePanel("Write to", "./", "UnityEngine.d.ts", "d.ts");
        if (string.IsNullOrEmpty(f)) return;
        var tw = new TypescriptDefinitionWriter.TypescriptDefinitionWriter();
        var defs = tw.MakeDefineFile(ass);
        var txt = new System.Text.StringBuilder();
        txt.AppendLine("/*");
        txt.AppendLine(" Unity Version(" + Application.unityVersion+")");
        txt.AppendLine("");
        txt.AppendLine(" Assemblies");
        foreach (var a in ass.OrderBy(e => e.FullName))
        {
            txt.AppendLine("   " + a.FullName);
        }
        txt.AppendLine(" */");
        txt.AppendLine("");
        foreach (var kv in defs)
        {
            txt.Append(kv.Value);
        }
        System.IO.File.WriteAllText(f, txt.ToString());

    }
}