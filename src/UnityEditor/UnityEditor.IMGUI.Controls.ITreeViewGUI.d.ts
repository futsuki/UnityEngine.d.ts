declare namespace UnityEditor.IMGUI.Controls {
  class ITreeViewGUI {
    // constructors
    private constructor();
    // methods
    OnInitialize(): void;
    GetTotalSize(): any;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    GetRowRect(row: number, rowWidth: number): any;
    GetRectForFraming(row: number): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    BeginRowGUI(): void;
    EndRowGUI(): void;
    BeginPingItem(item: UnityEditor.IMGUI.Controls.TreeViewItem, topPixelOfRow: number, availableWidth: number): void;
    EndPingItem(): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    EndRename(): void;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    // properties
    readonly halfDropBetweenHeight: number;
    readonly topRowMargin: number;
    readonly bottomRowMargin: number;
    // fields
  }
}
