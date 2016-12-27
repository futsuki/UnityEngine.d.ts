declare namespace UnityEditor {
  class AssetStoreSearchResults {
    // constructors
    constructor(c: ((res: UnityEditor.AssetStoreSearchResults) => void));
    // methods
    Parse(response: UnityEditor.AssetStoreResponse): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    error: string;
    warnings: string;
  }
}
