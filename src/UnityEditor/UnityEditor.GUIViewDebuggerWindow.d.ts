declare namespace UnityEditor {
  class GUIViewDebuggerWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    HighlightInstruction(view: UnityEditor.GUIView, instructionRect: any, style: any): void;
    // properties
    readonly instructionModeView: UnityEditor.IBaseInspectView;
    InstructionOverlayWindow: UnityEditor.InstructionOverlayWindow;
    // fields
    m_Inspected: UnityEditor.GUIView;
    static s_Styles: UnityEditor.GUIViewDebuggerWindow.Styles;
  }
}
