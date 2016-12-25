declare namespace UnityEditor {
  class AssetStorePreviewManager {
    // constructors
    private constructor();
    // methods
    static StatsString(): string;
    static TextureFromUrl(url: string, label: string, textureSize: number, labelStyle: any, iconStyle: any, onlyCached: boolean): UnityEditor.AssetStorePreviewManager.CachedAssetStoreImage;
    static CheckRepaint(): boolean;
    static AbortSize(size: number): any;
    static AbortOlderThan(timestamp: number): any;
    // properties
    // fields
  }
}
