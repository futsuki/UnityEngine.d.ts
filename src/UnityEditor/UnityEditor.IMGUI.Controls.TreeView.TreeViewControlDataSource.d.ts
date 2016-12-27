declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class TreeViewControlDataSource extends UnityEditor.IMGUI.Controls.LazyTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.IMGUI.Controls.TreeView);
    // methods
    FetchData(): void;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    // fields
  }
}
