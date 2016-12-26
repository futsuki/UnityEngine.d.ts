declare namespace UnityEditor {
  class AssetStorePreviewManager {
    // constructors
    private constructor();
    // methods
    static StatsString(): string;
    static TextureFromUrl(url: string, label: string, textureSize: number, labelStyle: any, iconStyle: any, onlyCached: boolean): UnityEditor.AssetStorePreviewManager.CachedAssetStoreImage;
    static CheckRepaint(): boolean;
    static AbortSize(size: number): void;
    static AbortOlderThan(timestamp: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static MaxCachedImages: number;
    static readonly CacheFull: boolean;
    static readonly Downloading: number;
    // fields
  }
}
