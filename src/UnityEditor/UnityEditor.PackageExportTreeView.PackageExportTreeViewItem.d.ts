declare namespace UnityEditor.PackageExportTreeView {
  class PackageExportTreeViewItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(itemIn: UnityEditor.ExportPackageItem, id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    // properties
    item: UnityEditor.ExportPackageItem;
    enabledState: UnityEditor.PackageExportTreeView.EnabledState;
    readonly isFolder: boolean;
    // fields
  }
}
