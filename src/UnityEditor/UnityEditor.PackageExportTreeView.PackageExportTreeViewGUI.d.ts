declare namespace UnityEditor.PackageExportTreeView {
  class PackageExportTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, view: UnityEditor.PackageExportTreeView);
    // methods
    OnRowGUI(rowRect: any, tvItem: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    // properties
    showPreviewForID: number;
    // fields
    itemWasToggled: ((obj: UnityEditor.PackageExportTreeView.PackageExportTreeViewItem) => void);
  }
}
