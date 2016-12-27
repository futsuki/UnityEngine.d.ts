declare namespace UnityEditor {
  class ProjectBrowserColumnOneTreeViewGUI extends UnityEditor.AssetsTreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    GetTotalSize(): any;
    GetRowRect(row: number, rowWidth: number): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    static GetListAreaGridSize(): number;
    // properties
    // fields
  }
}
