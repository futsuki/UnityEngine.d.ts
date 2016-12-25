declare namespace UnityEditor {
  class PostprocessBuildPlayer {
    // constructors
    constructor();
    // methods
    static GetScriptLayoutFileFromBuild(options: UnityEditor.BuildOptions, target: UnityEditor.BuildTarget, installPath: string, fileName: string): string;
    static PrepareForBuild(options: UnityEditor.BuildOptions, target: UnityEditor.BuildTarget): string;
    static SupportsScriptsOnlyBuild(target: UnityEditor.BuildTarget): boolean;
    static GetExtensionForBuildTarget(target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    static SupportsInstallInBuildFolder(target: UnityEditor.BuildTarget): boolean;
    static Launch(target: UnityEditor.BuildTarget, path: string, productName: string, options: UnityEditor.BuildOptions): any;
    static Postprocess(target: UnityEditor.BuildTarget, installPath: string, companyName: string, productName: string, width: number, height: number, downloadWebplayerUrl: string, manualDownloadWebplayerUrl: string, options: UnityEditor.BuildOptions, usedClassRegistry: UnityEditor.RuntimeClassRegistry, report: UnityEditor.BuildReporting.BuildReport): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly subDir32Bit: string;
    static readonly subDir64Bit: string;
    // fields
  }
}
