declare namespace UnityEditor {
  class AssemblyTypeInfoGenerator {
    // constructors
    constructor(assembly: string, searchDirs: string[]);
    constructor(assembly: string, resolver: any);
    // methods
    GatherClassInfo(): UnityEditor.AssemblyTypeInfoGenerator.ClassInfo[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ClassInfoArray: UnityEditor.AssemblyTypeInfoGenerator.ClassInfo[];
    // fields
  }
}
