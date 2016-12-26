declare namespace UnityEditor {
  class AssetStoreAssetSelection {
    // constructors
    private constructor();
    // methods
    static AddAsset(searchResult: UnityEditor.AssetStoreAsset, placeholderPreviewImage: any): void;
    static RefreshFromServer(callback: UnityEditor.AssetStoreAssetSelection.AssetsRefreshed): void;
    static ContainsAsset(id: number): boolean;
    static Clear(): void;
    static GetFirstAsset(): UnityEditor.AssetStoreAsset;
    // properties
    // fields
  }
}
