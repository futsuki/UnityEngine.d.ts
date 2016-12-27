declare namespace UnityEditorInternal.FrameDebuggerTreeView {
  class FDTreeViewDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, frameEvents: UnityEditorInternal.FrameDebuggerEvent[]);
    // methods
    SetEvents(frameEvents: UnityEditorInternal.FrameDebuggerEvent[]): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    FetchData(): void;
    // properties
    // fields
  }
}
