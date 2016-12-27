declare namespace UnityEditor.PackageImportTreeView {
  class PackageImportTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, view: UnityEditor.PackageImportTreeView);
    // methods
    OnRowGUI(rowRect: any, tvItem: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    // properties
    showPreviewForID: number;
    // fields
    itemWasToggled: ((obj: UnityEditor.PackageImportTreeView.PackageImportTreeViewItem) => void);
  }
}
