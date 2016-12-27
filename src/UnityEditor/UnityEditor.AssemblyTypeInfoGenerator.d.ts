declare namespace UnityEditor {
  class AssemblyTypeInfoGenerator extends System.Object {
    // constructors
    constructor(assembly: string, searchDirs: string[]);
    constructor(assembly: string, resolver: any);
    // methods
    GatherClassInfo(): UnityEditor.AssemblyTypeInfoGenerator.ClassInfo[];
    // properties
    readonly ClassInfoArray: UnityEditor.AssemblyTypeInfoGenerator.ClassInfo[];
    // fields
  }
}
