declare namespace UnityEditor {
  class AssetPreview {
    // constructors
    constructor();
    // methods
    static GetAssetPreview(asset: any): any;
    static IsLoadingAssetPreview(instanceID: number): boolean;
    static IsLoadingAssetPreviews(): boolean;
    static SetPreviewTextureCacheSize(size: number): any;
    static GetMiniThumbnail(obj: any): any;
    static GetMiniTypeThumbnail(type: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
