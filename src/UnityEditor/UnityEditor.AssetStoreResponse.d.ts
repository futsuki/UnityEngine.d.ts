declare namespace UnityEditor {
  class AssetStoreResponse {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly failed: boolean;
    readonly message: string;
    // fields
    dict: any;
    ok: boolean;
  }
}
