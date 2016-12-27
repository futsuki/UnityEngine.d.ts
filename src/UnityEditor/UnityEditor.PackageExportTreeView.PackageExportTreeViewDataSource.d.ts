declare namespace UnityEditor.PackageExportTreeView {
  class PackageExportTreeViewDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, view: UnityEditor.PackageExportTreeView);
    // methods
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    FetchData(): void;
    // properties
    // fields
  }
}
