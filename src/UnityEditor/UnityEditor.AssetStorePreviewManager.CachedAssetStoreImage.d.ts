declare namespace UnityEditor.AssetStorePreviewManager {
  class CachedAssetStoreImage {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly color: any;
    // fields
    image: any;
    lastUsed: number;
    lastFetched: number;
    requestedWidth: number;
    label: string;
  }
}
