declare namespace UnityEditor {
  class GradientPicker {
    // constructors
    constructor();
    // methods
    static Show(newGradient: any): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    OnGUI(): void;
    static SetCurrentGradient(gradient: any): void;
    static CloseWindow(): void;
    static RepaintWindow(): void;
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
    static readonly presetsEditorPrefID: string;
    static readonly instance: UnityEditor.GradientPicker;
    currentPresetLibrary: string;
    static readonly visible: boolean;
    static readonly gradient: any;
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
