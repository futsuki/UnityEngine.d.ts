declare namespace UnityEditor {
  class AssetStoreAssetSelection extends System.Object {
    // constructors
    protected constructor();
    // methods
    static AddAsset(searchResult: UnityEditor.AssetStoreAsset, placeholderPreviewImage: any): void;
    static RefreshFromServer(callback: (() => void)): void;
    static ContainsAsset(id: number): boolean;
    static Clear(): void;
    static GetFirstAsset(): UnityEditor.AssetStoreAsset;
    // properties
    static readonly Count: number;
    static readonly Empty: boolean;
    // fields
  }
}
