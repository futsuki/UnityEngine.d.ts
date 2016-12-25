declare namespace UnityEditor.Modules {
  class DefaultCompilationExtension {
    // constructors
    constructor();
    // methods
    GetCsCompiler(buildingForEditor: boolean, assemblyName: string): UnityEditor.Modules.CSharpCompiler;
    GetCompilerExtraAssemblyPaths(isEditor: boolean, assemblyPathName: string): string[];
    GetAssemblyResolver(buildingForEditor: boolean, assemblyPath: string, searchDirectories: string[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
