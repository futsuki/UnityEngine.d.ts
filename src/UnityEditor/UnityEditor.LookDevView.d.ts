declare namespace UnityEditor {
  class LookDevView {
    // constructors
    constructor();
    // methods
    static DrawFullScreenQuad(previewRect: any): any;
    CreateNewLibrary(assetPath: string): any;
    static OpenInLookDevTool(go: any): any;
    OnDestroy(): any;
    UpdateLookDevModeToggle(lookDevMode: UnityEditor.LookDevMode, value: boolean): any;
    Update(): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    ResetView(): any;
    SaveLookDevConfig(): any;
    SaveLookDevLibrary(): boolean;
    OnEnable(): any;
    OnDisable(): any;
    HandleKeyboardShortcut(): any;
    Frame(): any;
    Frame(animate: boolean): any;
    UpdateFocus(position: any): any;
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
    static readonly styles: UnityEditor.LookDevView.Styles;
    readonly hotControl: number;
    readonly config: UnityEditor.LookDevConfig;
    envLibrary: UnityEditor.LookDevEnvironmentLibrary;
    readonly userEnvLibrary: UnityEditor.LookDevEnvironmentLibrary;
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
    static m_FirstViewGizmoColor: any;
    static m_SecondViewGizmoColor: any;
  }
}
