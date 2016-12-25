declare namespace UnityEditor {
  class AssetStoreWindow {
    // constructors
    constructor();
    // methods
    static OpenURL(url: string): any;
    static Init(): UnityEditor.AssetStoreWindow;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    Logout(): any;
    Reload(): any;
    OnLoadError(url: string): any;
    OnInitScripting(): any;
    OnOpenExternalLink(url: string): any;
    OnEnable(): any;
    OnDisable(): any;
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): any;
    OnGUI(): any;
    UpdateDockStatusIfNeeded(): any;
    ToggleMaximize(): any;
    Refresh(): any;
    OnFocus(): any;
    OnLostFocus(): any;
    OnBecameInvisible(): any;
    OnDestroy(): any;
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
    readonly initialized: boolean;
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
