declare namespace UnityEditor {
  class AssetStoreWindow {
    // constructors
    constructor();
    // methods
    static OpenURL(url: string): void;
    static Init(): UnityEditor.AssetStoreWindow;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    Logout(): void;
    Reload(): void;
    OnLoadError(url: string): void;
    OnInitScripting(): void;
    OnOpenExternalLink(url: string): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): void;
    OnGUI(): void;
    UpdateDockStatusIfNeeded(): void;
    ToggleMaximize(): void;
    Refresh(): void;
    OnFocus(): void;
    OnLostFocus(): void;
    OnBecameInvisible(): void;
    OnDestroy(): void;
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
