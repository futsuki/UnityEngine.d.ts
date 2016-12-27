declare namespace UnityEngine {
  class AssetBundleManifest extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetAllAssetBundles(): string[];
    GetAllAssetBundlesWithVariant(): string[];
    GetAssetBundleHash(assetBundleName: string): UnityEngine.Hash128;
    GetDirectDependencies(assetBundleName: string): string[];
    GetAllDependencies(assetBundleName: string): string[];
    // properties
    // fields
  }
}
