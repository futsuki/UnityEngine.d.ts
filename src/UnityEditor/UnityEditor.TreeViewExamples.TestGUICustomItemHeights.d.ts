declare namespace UnityEditor.TreeViewExamples {
  class TestGUICustomItemHeights {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    BeginRowGUI(): void;
    EndRowGUI(): void;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    OnInitialize(): void;
    GetRowRect(row: number, rowWidth: number): any;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    GetRectForFraming(row: number): any;
    CalculateRowRects(): void;
    GetTotalSize(): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    BeginPingItem(item: UnityEditor.IMGUI.Controls.TreeViewItem, topPixelOfRow: number, availableWidth: number): void;
    EndPingItem(): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    EndRename(): void;
    GetFoldoutIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly halfDropBetweenHeight: number;
    readonly topRowMargin: number;
    readonly bottomRowMargin: number;
    // fields
  }
}
