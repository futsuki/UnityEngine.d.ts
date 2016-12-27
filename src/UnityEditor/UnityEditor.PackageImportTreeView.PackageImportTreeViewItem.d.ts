declare namespace UnityEditor.PackageImportTreeView {
  class PackageImportTreeViewItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(itemIn: UnityEditor.ImportPackageItem, id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    // properties
    item: UnityEditor.ImportPackageItem;
    enableState: UnityEditor.PackageImportTreeView.EnabledState;
    // fields
  }
}
