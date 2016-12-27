declare namespace UnityEditor {
  class PostprocessBuildPlayer extends System.Object {
    // constructors
    constructor();
    // methods
    static GetScriptLayoutFileFromBuild(options: UnityEditor.BuildOptions, target: UnityEditor.BuildTarget, installPath: string, fileName: string): string;
    static PrepareForBuild(options: UnityEditor.BuildOptions, target: UnityEditor.BuildTarget): string;
    static SupportsScriptsOnlyBuild(target: UnityEditor.BuildTarget): boolean;
    static GetExtensionForBuildTarget(target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    static SupportsInstallInBuildFolder(target: UnityEditor.BuildTarget): boolean;
    static Launch(target: UnityEditor.BuildTarget, path: string, productName: string, options: UnityEditor.BuildOptions): void;
    static Postprocess(target: UnityEditor.BuildTarget, installPath: string, companyName: string, productName: string, width: number, height: number, downloadWebplayerUrl: string, manualDownloadWebplayerUrl: string, options: UnityEditor.BuildOptions, usedClassRegistry: UnityEditor.RuntimeClassRegistry, report: UnityEditor.BuildReporting.BuildReport): void;
    // properties
    static readonly subDir32Bit: string;
    static readonly subDir64Bit: string;
    // fields
  }
}
