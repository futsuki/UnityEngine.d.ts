declare namespace UnityEditor.Connect {
  class UnityConnectEditorWindow {
    // constructors
    private constructor();
    // methods
    static Create(title: string, serviceUrls: any): UnityEditor.Connect.UnityConnectEditorWindow;
    UrlsMatch(referenceUrls: any): boolean;
    OnEnable(): void;
    OnInitScripting(): void;
    ToggleMaximize(): void;
    OnLoadError(url: string): void;
    OnGUI(): void;
    Init(): void;
    OnDestroy(): void;
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    GetWebViewFromURL(url: string): UnityEditor.WebView;
    OnInitScripting(): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    Reload(): void;
    About(): void;
    OnLoadError(url: string): void;
    ToggleMaximize(): void;
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
    ErrorUrl: string;
    currentUrl: string;
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
