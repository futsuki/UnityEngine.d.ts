declare namespace UnityEditor {
  class BuildAssetBundleOptions {
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
    static None: UnityEditor.BuildAssetBundleOptions;
    static UncompressedAssetBundle: UnityEditor.BuildAssetBundleOptions;
    static CollectDependencies: UnityEditor.BuildAssetBundleOptions;
    static CompleteAssets: UnityEditor.BuildAssetBundleOptions;
    static DisableWriteTypeTree: UnityEditor.BuildAssetBundleOptions;
    static DeterministicAssetBundle: UnityEditor.BuildAssetBundleOptions;
    static ForceRebuildAssetBundle: UnityEditor.BuildAssetBundleOptions;
    static IgnoreTypeTreeChanges: UnityEditor.BuildAssetBundleOptions;
    static AppendHashToAssetBundleName: UnityEditor.BuildAssetBundleOptions;
    static ChunkBasedCompression: UnityEditor.BuildAssetBundleOptions;
    static StrictMode: UnityEditor.BuildAssetBundleOptions;
    static DryRunBuild: UnityEditor.BuildAssetBundleOptions;
  }
}
