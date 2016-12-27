declare namespace UnityEditor.Modules {
  class IBuildPostprocessor {
    // constructors
    protected constructor();
    // methods
    LaunchPlayer(args: UnityEditor.Modules.BuildLaunchPlayerArgs): void;
    PostProcess(args: UnityEditor.Modules.BuildPostProcessArgs): void;
    SupportsInstallInBuildFolder(): boolean;
    PostProcessScriptsOnly(args: UnityEditor.Modules.BuildPostProcessArgs): void;
    SupportsScriptsOnlyBuild(): boolean;
    GetScriptLayoutFileFromBuild(options: UnityEditor.BuildOptions, installPath: string, fileName: string): string;
    PrepareForBuild(options: UnityEditor.BuildOptions, target: UnityEditor.BuildTarget): string;
    GetExtension(target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    // properties
    // fields
  }
}
