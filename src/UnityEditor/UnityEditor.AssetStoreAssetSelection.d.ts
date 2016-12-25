declare namespace UnityEditor {
  class AssetStoreAssetSelection {
    // constructors
    private constructor();
    // methods
    static AddAsset(searchResult: UnityEditor.AssetStoreAsset, placeholderPreviewImage: any): any;
    static RefreshFromServer(callback: UnityEditor.AssetStoreAssetSelection.AssetsRefreshed): any;
    static ContainsAsset(id: number): boolean;
    static Clear(): any;
    static GetFirstAsset(): UnityEditor.AssetStoreAsset;
    // properties
    // fields
  }
}
