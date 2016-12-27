declare namespace UnityEditorInternal.AudioProfilerGroupView {
  class AudioProfilerDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, backend: UnityEditorInternal.AudioProfilerGroupViewBackend);
    // methods
    FetchData(): void;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    // fields
  }
}
