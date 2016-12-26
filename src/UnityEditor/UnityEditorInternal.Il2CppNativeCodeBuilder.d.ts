declare namespace UnityEditorInternal {
  class Il2CppNativeCodeBuilder {
    // constructors
    private constructor();
    // methods
    ConvertIncludesToFullPaths(relativeIncludePaths: any): any;
    ConvertOutputFileToFullPath(outputFileRelativePath: string): string;
    SetupStartInfo(startInfo: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
