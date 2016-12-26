declare namespace UnityEditor {
  class AssetStoreInstaBuyWindow {
    // constructors
    constructor();
    // methods
    static ShowAssetStoreInstaBuyWindow(asset: UnityEditor.AssetStoreAsset, purchaseMessage: string, paymentMethodCard: string, paymentMethodExpire: string, priceText: string): UnityEditor.AssetStoreInstaBuyWindow;
    static ShowAssetStoreInstaBuyWindowBuilding(asset: UnityEditor.AssetStoreAsset): void;
    OnInspectorUpdate(): void;
    OnDisable(): void;
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): void;
    OnGUI(): void;
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
