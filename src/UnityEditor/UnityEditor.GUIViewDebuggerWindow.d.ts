declare namespace UnityEditor {
  class GUIViewDebuggerWindow {
    // constructors
    constructor();
    // methods
    HighlightInstruction(view: UnityEditor.GUIView, instructionRect: any, style: any): void;
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
    readonly instructionModeView: UnityEditor.IBaseInspectView;
    InstructionOverlayWindow: UnityEditor.InstructionOverlayWindow;
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
    m_Inspected: UnityEditor.GUIView;
    static s_Styles: UnityEditor.GUIViewDebuggerWindow.Styles;
  }
}
