declare namespace UnityEditor {
  class GUIViewDebuggerWindow {
    // constructors
    constructor();
    // methods
    HighlightInstruction(view: UnityEditor.GUIView, instructionRect: any, style: any): any;
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
