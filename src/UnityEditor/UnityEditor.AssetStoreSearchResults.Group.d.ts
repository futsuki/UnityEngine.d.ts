declare namespace UnityEditor.AssetStoreSearchResults {
  class Group {
    // constructors
    private constructor();
    // methods
    static Create(): UnityEditor.AssetStoreSearchResults.Group;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    assets: any;
    totalFound: number;
    label: string;
    name: string;
    offset: number;
    limit: number;
  }
}
