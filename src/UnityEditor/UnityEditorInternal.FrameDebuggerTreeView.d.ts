declare namespace UnityEditorInternal {
  class FrameDebuggerTreeView {
    // constructors
    constructor(frameEvents: UnityEditorInternal.FrameDebuggerEvent[], treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, window: UnityEditor.FrameDebuggerWindow, startRect: any);
    // methods
    SelectFrameEventIndex(eventIndex: number): any;
    OnGUI(rect: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
