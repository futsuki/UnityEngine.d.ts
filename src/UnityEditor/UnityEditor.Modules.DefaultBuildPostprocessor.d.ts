declare namespace UnityEditor.Modules {
  class DefaultBuildPostprocessor {
    // constructors
    private constructor();
    // methods
    LaunchPlayer(args: UnityEditor.Modules.BuildLaunchPlayerArgs): void;
    PostProcess(args: UnityEditor.Modules.BuildPostProcessArgs): void;
    SupportsInstallInBuildFolder(): boolean;
    PostProcessScriptsOnly(args: UnityEditor.Modules.BuildPostProcessArgs): void;
    SupportsScriptsOnlyBuild(): boolean;
    GetScriptLayoutFileFromBuild(options: UnityEditor.BuildOptions, installPath: string, fileName: string): string;
    PrepareForBuild(options: UnityEditor.BuildOptions, target: UnityEditor.BuildTarget): string;
    GetExtension(target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
