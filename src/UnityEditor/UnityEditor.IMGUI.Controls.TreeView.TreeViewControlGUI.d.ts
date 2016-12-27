declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class TreeViewControlGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.IMGUI.Controls.TreeView);
    // methods
    GetTotalSize(): any;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    DefaultRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    BeginRowGUI(): void;
    EndRowGUI(): void;
    GetRowRect(row: number, rowWidth: number): any;
    GetRectForFraming(row: number): any;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    SetRowHeights(rowHeights: number[]): void;
    // properties
    readonly foldoutWidth: number;
    columnIndexForTreeFoldouts: number;
    // fields
  }
}
