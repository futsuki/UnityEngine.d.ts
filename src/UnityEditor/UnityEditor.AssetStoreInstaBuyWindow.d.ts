declare namespace UnityEditor {
  class AssetStoreInstaBuyWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static ShowAssetStoreInstaBuyWindow(asset: UnityEditor.AssetStoreAsset, purchaseMessage: string, paymentMethodCard: string, paymentMethodExpire: string, priceText: string): UnityEditor.AssetStoreInstaBuyWindow;
    static ShowAssetStoreInstaBuyWindowBuilding(asset: UnityEditor.AssetStoreAsset): void;
    OnInspectorUpdate(): void;
    OnDisable(): void;
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): void;
    OnGUI(): void;
    // properties
    // fields
  }
}
