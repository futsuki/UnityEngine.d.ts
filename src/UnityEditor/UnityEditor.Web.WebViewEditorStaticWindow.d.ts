declare namespace UnityEditor.Web {
  class WebViewEditorStaticWindow {
    // constructors
    private constructor();
    // methods
    OnDestroy(): void;
    OnInitScripting(): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    Reload(): void;
    About(): void;
    OnLoadError(url: string): void;
    ToggleMaximize(): void;
    Init(): void;
    OnGUI(): void;
    OnBatchMode(): void;
    Refresh(): void;
    OnFocus(): void;
    OnLostFocus(): void;
    OnEnable(): void;
    OnBecameInvisible(): void;
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
    initialOpenUrl: string;
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
