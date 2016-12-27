declare namespace UnityEditorInternal {
  class FrameDebuggerTreeView extends System.Object {
    // constructors
    constructor(frameEvents: UnityEditorInternal.FrameDebuggerEvent[], treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, window: UnityEditor.FrameDebuggerWindow, startRect: any);
    // methods
    SelectFrameEventIndex(eventIndex: number): void;
    OnGUI(rect: any): void;
    // properties
    // fields
  }
}
