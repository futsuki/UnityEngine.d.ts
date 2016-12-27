declare namespace UnityEditor.TreeViewForAudioMixerGroup {
  class GroupTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    GetRowRect(row: number, rowWidth: number): any;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    CalculateRowRects(): void;
    GetTotalSize(): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    // properties
    // fields
  }
}
