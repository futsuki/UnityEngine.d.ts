declare namespace UnityEditor.Modules {
  class ICompilationExtension {
    // constructors
    private constructor();
    // methods
    GetCsCompiler(buildingForEditor: boolean, assemblyName: string): UnityEditor.Modules.CSharpCompiler;
    GetCompilerExtraAssemblyPaths(isEditor: boolean, assemblyPathName: string): string[];
    GetAssemblyResolver(buildingForEditor: boolean, assemblyPath: string, searchDirectories: string[]): any;
    // properties
    // fields
  }
}
