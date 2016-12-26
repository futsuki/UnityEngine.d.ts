declare namespace UnityEditor {
  class AssemblyReferenceChecker {
    // constructors
    constructor();
    // methods
    static AssemblyReferenceCheckerWithUpdateProgressAction(action: any): UnityEditor.AssemblyReferenceChecker;
    CollectReferencesFromRoots(dir: string, roots: any, collectMethods: boolean, progressValue: number, ignoreSystemDlls: boolean): void;
    CollectReferences(path: string, collectMethods: boolean, progressValue: number, ignoreSystemDlls: boolean): void;
    HasReferenceToMethod(methodName: string): boolean;
    HasDefinedMethod(methodName: string): boolean;
    HasReferenceToType(typeName: string): boolean;
    GetAssemblyDefinitions(): any[];
    GetAssemblyFileNames(): string[];
    WhoReferencesClass(klass: string, ignoreSystemDlls: boolean): string;
    static IsIgnoredSystemDll(name: string): boolean;
    static GetScriptsHaveMouseEvents(path: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly HasMouseEvent: boolean;
    // fields
  }
}
