declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class TreeViewControlGUI {
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
    SetRowHeights(rowHeights: any): void;
    OnInitialize(): void;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    BeginPingItem(item: UnityEditor.IMGUI.Controls.TreeViewItem, topPixelOfRow: number, availableWidth: number): void;
    EndPingItem(): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    EndRename(): void;
    DoRenameOverlay(): void;
    GetFoldoutIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly foldoutWidth: number;
    columnIndexForTreeFoldouts: number;
    iconLeftPadding: number;
    iconRightPadding: number;
    readonly iconTotalPadding: number;
    iconOverlayGUI: any;
    readonly indentWidth: number;
    readonly halfDropBetweenHeight: number;
    readonly topRowMargin: number;
    readonly bottomRowMargin: number;
    // fields
    k_LineHeight: number;
    k_BaseIndent: number;
    k_IndentWidth: number;
    k_IconWidth: number;
    k_SpaceBetweenIconAndText: number;
    k_TopRowMargin: number;
    k_BottomRowMargin: number;
    k_HalfDropBetweenHeight: number;
    foldoutYOffset: number;
    extraInsertionMarkerIndent: number;
  }
}
