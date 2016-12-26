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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly Count: number;
    static readonly Empty: boolean;
    // fields
  }
}
