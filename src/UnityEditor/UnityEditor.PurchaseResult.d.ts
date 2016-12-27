declare namespace UnityEditor {
  class PurchaseResult {
    // constructors
    constructor(c: ((res: UnityEditor.PurchaseResult) => void));
    // methods
    Parse(response: UnityEditor.AssetStoreResponse): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    status: UnityEditor.PurchaseResult.Status;
    packageID: number;
    message: string;
    error: string;
    warnings: string;
  }
}
