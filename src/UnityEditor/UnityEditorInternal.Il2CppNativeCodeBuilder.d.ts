declare namespace UnityEditorInternal {
  class Il2CppNativeCodeBuilder extends System.Object {
    // constructors
    protected constructor();
    // methods
    ConvertIncludesToFullPaths(relativeIncludePaths: any): any;
    ConvertOutputFileToFullPath(outputFileRelativePath: string): string;
    SetupStartInfo(startInfo: any): void;
    // properties
    readonly CompilerPlatform: string;
    readonly CompilerArchitecture: string;
    readonly CompilerFlags: string;
    readonly LinkerFlags: string;
    readonly SetsUpEnvironment: boolean;
    readonly CacheDirectory: string;
    readonly PluginPath: string;
    readonly AdditionalIl2CPPArguments: any;
    // fields
  }
}
