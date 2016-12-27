declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, state: UnityEditorInternal.AnimationWindowState);
    // methods
    BeginRowGUI(): void;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    GetNodeHeight(node: UnityEditorInternal.AnimationWindowHierarchyNode): number;
    GetTotalSize(): any;
    GetRowRect(row: number, rowWidth: number): any;
    OnRowGUI(rowRect: any, node: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    // properties
    state: UnityEditorInternal.AnimationWindowState;
    // fields
    static k_DopeSheetRowHeight: number;
    static k_DopeSheetRowHeightTall: number;
    static k_AddCurveButtonNodeHeight: number;
    static k_RowBackgroundColorBrightness: number;
  }
}
