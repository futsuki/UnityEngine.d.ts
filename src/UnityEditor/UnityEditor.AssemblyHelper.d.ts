declare namespace UnityEditor {
  class AssemblyHelper {
    // constructors
    constructor();
    // methods
    static CheckForAssemblyFileNameMismatch(assemblyPath: string): any;
    static GetNamesOfAssembliesLoadedInCurrentDomain(): string[];
    static FindLoadedAssemblyWithName(s: string): any;
    static ExtractInternalAssemblyName(path: string): string;
    static FindAssembliesReferencedBy(paths: string[], foldersToSearch: string[], target: UnityEditor.BuildTarget): string[];
    static FindAssembliesReferencedBy(path: string, foldersToSearch: string[], target: UnityEditor.BuildTarget): string[];
    static ExtractAllClassesThatInheritMonoBehaviourAndScriptableObject(path: string, classNamesArray: any, classNameSpacesArray: any): any;
    static ExtractAssemblyTypeInfo(targetPlatform: UnityEditor.BuildTarget, isEditor: boolean, assemblyPathName: string, searchDirs: string[]): UnityEditor.AssemblyTypeInfoGenerator.ClassInfo[];
    static IsManagedAssembly(file: string): boolean;
    static IsInternalAssembly(file: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
