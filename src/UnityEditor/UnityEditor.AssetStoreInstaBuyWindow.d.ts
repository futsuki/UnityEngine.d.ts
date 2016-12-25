declare namespace UnityEditor {
  class AssetStoreInstaBuyWindow {
    // constructors
    constructor();
    // methods
    static ShowAssetStoreInstaBuyWindow(asset: UnityEditor.AssetStoreAsset, purchaseMessage: string, paymentMethodCard: string, paymentMethodExpire: string, priceText: string): UnityEditor.AssetStoreInstaBuyWindow;
    static ShowAssetStoreInstaBuyWindowBuilding(asset: UnityEditor.AssetStoreAsset): any;
    OnInspectorUpdate(): any;
    OnDisable(): any;
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): any;
    OnGUI(): any;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
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
