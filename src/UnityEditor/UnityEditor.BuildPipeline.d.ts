declare namespace UnityEditor {
  class BuildPipeline extends System.Object {
    // constructors
    constructor();
    // methods
    static GetBuildTargetGroup(platform: UnityEditor.BuildTarget): UnityEditor.BuildTargetGroup;
    static PushAssetDependencies(): void;
    static PopAssetDependencies(): void;
    static BuildPlayer(levels: UnityEditor.EditorBuildSettingsScene[], locationPathName: string, target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    static BuildPlayer(levels: string[], locationPathName: string, target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    static BuildPlayer(buildPlayerOptions: UnityEditor.BuildPlayerOptions): string;
    static BuildStreamedSceneAssetBundle(levels: string[], locationPath: string, target: UnityEditor.BuildTarget, options: UnityEditor.BuildOptions): string;
    static BuildStreamedSceneAssetBundle(levels: string[], locationPath: string, target: UnityEditor.BuildTarget): string;
    static BuildStreamedSceneAssetBundle(levels: string[], locationPath: string, target: UnityEditor.BuildTarget, crc: any, options: UnityEditor.BuildOptions): string;
    static BuildStreamedSceneAssetBundle(levels: string[], locationPath: string, target: UnityEditor.BuildTarget, crc: any): string;
    static BuildAssetBundle(mainAsset: UnityEngine.Object, assets: UnityEngine.Object[], pathName: string, assetBundleOptions: UnityEditor.BuildAssetBundleOptions, targetPlatform: UnityEditor.BuildTarget): boolean;
    static BuildAssetBundle(mainAsset: UnityEngine.Object, assets: UnityEngine.Object[], pathName: string, assetBundleOptions: UnityEditor.BuildAssetBundleOptions): boolean;
    static BuildAssetBundle(mainAsset: UnityEngine.Object, assets: UnityEngine.Object[], pathName: string): boolean;
    static BuildAssetBundle(mainAsset: UnityEngine.Object, assets: UnityEngine.Object[], pathName: string, crc: any, assetBundleOptions: UnityEditor.BuildAssetBundleOptions, targetPlatform: UnityEditor.BuildTarget): boolean;
    static BuildAssetBundle(mainAsset: UnityEngine.Object, assets: UnityEngine.Object[], pathName: string, crc: any, assetBundleOptions: UnityEditor.BuildAssetBundleOptions): boolean;
    static BuildAssetBundle(mainAsset: UnityEngine.Object, assets: UnityEngine.Object[], pathName: string, crc: any): boolean;
    static BuildAssetBundleExplicitAssetNames(assets: UnityEngine.Object[], assetNames: string[], pathName: string, assetBundleOptions: UnityEditor.BuildAssetBundleOptions, targetPlatform: UnityEditor.BuildTarget): boolean;
    static BuildAssetBundleExplicitAssetNames(assets: UnityEngine.Object[], assetNames: string[], pathName: string, assetBundleOptions: UnityEditor.BuildAssetBundleOptions): boolean;
    static BuildAssetBundleExplicitAssetNames(assets: UnityEngine.Object[], assetNames: string[], pathName: string): boolean;
    static BuildAssetBundleExplicitAssetNames(assets: UnityEngine.Object[], assetNames: string[], pathName: string, crc: any, assetBundleOptions: UnityEditor.BuildAssetBundleOptions, targetPlatform: UnityEditor.BuildTarget): boolean;
    static BuildAssetBundleExplicitAssetNames(assets: UnityEngine.Object[], assetNames: string[], pathName: string, crc: any, assetBundleOptions: UnityEditor.BuildAssetBundleOptions): boolean;
    static BuildAssetBundleExplicitAssetNames(assets: UnityEngine.Object[], assetNames: string[], pathName: string, crc: any): boolean;
    static BuildAssetBundles(outputPath: string): any;
    static BuildAssetBundles(outputPath: string, assetBundleOptions: UnityEditor.BuildAssetBundleOptions): any;
    static BuildAssetBundles(outputPath: string, assetBundleOptions: UnityEditor.BuildAssetBundleOptions, targetPlatform: UnityEditor.BuildTarget): any;
    static BuildAssetBundles(outputPath: string, builds: UnityEditor.AssetBundleBuild[]): any;
    static BuildAssetBundles(outputPath: string, builds: UnityEditor.AssetBundleBuild[], assetBundleOptions: UnityEditor.BuildAssetBundleOptions): any;
    static BuildAssetBundles(outputPath: string, builds: UnityEditor.AssetBundleBuild[], assetBundleOptions: UnityEditor.BuildAssetBundleOptions, targetPlatform: UnityEditor.BuildTarget): any;
    static GetCRCForAssetBundle(targetPath: string, crc: any): boolean;
    static GetHashForAssetBundle(targetPath: string, hash: any): boolean;
    // properties
    static readonly isBuildingPlayer: boolean;
    // fields
  }
}
