declare namespace UnityEditor {
  class LookDevView {
    // constructors
    constructor();
    // methods
    static DrawFullScreenQuad(previewRect: any): void;
    CreateNewLibrary(assetPath: string): void;
    static OpenInLookDevTool(go: any): void;
    OnDestroy(): void;
    UpdateLookDevModeToggle(lookDevMode: UnityEditor.LookDevMode, value: boolean): void;
    Update(): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    ResetView(): void;
    SaveLookDevConfig(): void;
    SaveLookDevLibrary(): boolean;
    OnEnable(): void;
    OnDisable(): void;
    HandleKeyboardShortcut(): void;
    Frame(): void;
    Frame(animate: boolean): void;
    UpdateFocus(position: any): void;
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
