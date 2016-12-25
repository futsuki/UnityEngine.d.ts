declare namespace UnityEditor {
  class BuildOptions {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEditor.BuildOptions;
    static Development: UnityEditor.BuildOptions;
    static AutoRunPlayer: UnityEditor.BuildOptions;
    static ShowBuiltPlayer: UnityEditor.BuildOptions;
    static BuildAdditionalStreamedScenes: UnityEditor.BuildOptions;
    static AcceptExternalModificationsToPlayer: UnityEditor.BuildOptions;
    static InstallInBuildFolder: UnityEditor.BuildOptions;
    static WebPlayerOfflineDeployment: UnityEditor.BuildOptions;
    static ConnectWithProfiler: UnityEditor.BuildOptions;
    static AllowDebugging: UnityEditor.BuildOptions;
    static SymlinkLibraries: UnityEditor.BuildOptions;
    static UncompressedAssetBundle: UnityEditor.BuildOptions;
    static StripDebugSymbols: UnityEditor.BuildOptions;
    static CompressTextures: UnityEditor.BuildOptions;
    static ConnectToHost: UnityEditor.BuildOptions;
    static EnableHeadlessMode: UnityEditor.BuildOptions;
    static BuildScriptsOnly: UnityEditor.BuildOptions;
    static Il2CPP: UnityEditor.BuildOptions;
    static ForceEnableAssertions: UnityEditor.BuildOptions;
    static ForceOptimizeScriptCompilation: UnityEditor.BuildOptions;
    static ComputeCRC: UnityEditor.BuildOptions;
    static StrictMode: UnityEditor.BuildOptions;
  }
}
