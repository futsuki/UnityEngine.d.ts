declare namespace UnityEngine {
  class AssetBundleManifest {
    // constructors
    constructor();
    // methods
    GetAllAssetBundles(): string[];
    GetAllAssetBundlesWithVariant(): string[];
    GetAssetBundleHash(assetBundleName: string): UnityEngine.Hash128;
    GetDirectDependencies(assetBundleName: string): string[];
    GetAllDependencies(assetBundleName: string): string[];
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
