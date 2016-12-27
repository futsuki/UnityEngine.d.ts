declare namespace UnityEditorInternal.FrameDebuggerTreeView {
  class FDTreeViewItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditorInternal.FrameDebuggerTreeView.FDTreeViewItem, displayName: string);
    // methods
    // properties
    // fields
    m_FrameEvent: UnityEditorInternal.FrameDebuggerEvent;
    m_ChildEventCount: number;
    m_EventIndex: number;
  }
}
