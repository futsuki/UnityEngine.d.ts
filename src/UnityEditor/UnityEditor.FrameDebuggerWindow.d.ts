declare namespace UnityEditor {
  class FrameDebuggerWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static ShowFrameDebuggerWindow(): UnityEditor.FrameDebuggerWindow;
    EnableIfNeeded(): void;
    // properties
    static readonly styles: UnityEditor.FrameDebuggerWindow.Styles;
    // fields
    static s_FrameEventTypeNames: string[];
    m_PreviewDir: any;
  }
}
