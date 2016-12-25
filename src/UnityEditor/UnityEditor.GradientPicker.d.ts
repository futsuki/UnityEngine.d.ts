declare namespace UnityEditor {
  class GradientPicker {
    // constructors
    constructor();
    // methods
    static Show(newGradient: any): any;
    OnEnable(): any;
    OnDisable(): any;
    OnDestroy(): any;
    OnGUI(): any;
    static SetCurrentGradient(gradient: any): any;
    static CloseWindow(): any;
    static RepaintWindow(): any;
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
