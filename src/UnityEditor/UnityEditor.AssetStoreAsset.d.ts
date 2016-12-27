declare namespace UnityEditor {
  class AssetStoreAsset extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    // properties
    readonly Preview: UnityEngine.Object;
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
