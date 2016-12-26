declare namespace UnityEditor {
  class AssetStoreAsset {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Preview: any;
    readonly HasLivePreview: boolean;
    // fields
    id: number;
    name: string;
    displayName: string;
    staticPreviewURL: string;
    dynamicPreviewURL: string;
    className: string;
    price: string;
    packageID: number;
    previewImage: any;
  }
}
