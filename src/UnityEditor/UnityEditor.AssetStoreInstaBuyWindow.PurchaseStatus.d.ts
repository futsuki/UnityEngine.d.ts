declare namespace UnityEditor.AssetStoreInstaBuyWindow {
  class PurchaseStatus {
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
    static Init: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
    static InProgress: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
    static Declined: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
    static Complete: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
    static StartBuild: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
    static Building: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
    static Downloading: UnityEditor.AssetStoreInstaBuyWindow.PurchaseStatus;
  }
}
