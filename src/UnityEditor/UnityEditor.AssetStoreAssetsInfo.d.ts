declare namespace UnityEditor {
  class AssetStoreAssetsInfo {
    // constructors
    private constructor();
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
