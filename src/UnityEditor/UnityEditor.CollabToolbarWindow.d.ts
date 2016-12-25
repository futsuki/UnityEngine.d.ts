declare namespace UnityEditor {
  class CollabToolbarWindow {
    // constructors
    constructor();
    // methods
    static CloseToolbarWindows(): any;
    static CloseToolbarWindowsImmediately(): any;
    static ShowToolbarWindow(): UnityEditor.CollabToolbarWindow;
    static ValidateShowToolbarWindow(): boolean;
    OnReceiveTitle(title: string): any;
    OnInitScripting(): any;
    OnEnable(): any;
    OnDestroy(): any;
    OnFocus(): any;
    OnLostFocus(): any;
    OnDestroy(): any;
    OnInitScripting(): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    Reload(): any;
    About(): any;
    OnLoadError(url: string): any;
    ToggleMaximize(): any;
    Init(): any;
    OnGUI(): any;
    OnBatchMode(): any;
    Refresh(): any;
    OnFocus(): any;
    OnLostFocus(): any;
    OnBecameInvisible(): any;
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
    static s_ToolbarIsVisible: boolean;
  }
}
