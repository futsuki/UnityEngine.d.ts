declare namespace UnityEditor.AssetStoreSearchResults {
  class Group extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEditor.AssetStoreSearchResults.Group;
    // properties
    // fields
    assets: UnityEditor.AssetStoreAsset[];
    totalFound: number;
    label: string;
    name: string;
    offset: number;
    limit: number;
  }
}
