declare namespace UnityEditor {
  class AssetPreview extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAssetPreview(asset: UnityEngine.Object): any;
    static IsLoadingAssetPreview(instanceID: number): boolean;
    static IsLoadingAssetPreviews(): boolean;
    static SetPreviewTextureCacheSize(size: number): void;
    static GetMiniThumbnail(obj: UnityEngine.Object): any;
    static GetMiniTypeThumbnail(type: any): any;
    // properties
    // fields
  }
}
