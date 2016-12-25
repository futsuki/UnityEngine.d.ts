declare namespace UnityEditor.AssetStoreAssetsInfo {
  class Status {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static BasketNotEmpty: UnityEditor.AssetStoreAssetsInfo.Status;
    static ServiceDisabled: UnityEditor.AssetStoreAssetsInfo.Status;
    static AnonymousUser: UnityEditor.AssetStoreAssetsInfo.Status;
    static Ok: UnityEditor.AssetStoreAssetsInfo.Status;
  }
}
