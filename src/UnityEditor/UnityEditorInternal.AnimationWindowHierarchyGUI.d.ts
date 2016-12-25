declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, state: UnityEditorInternal.AnimationWindowState);
    // methods
    BeginRowGUI(): any;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): any;
    GetNodeHeight(node: UnityEditorInternal.AnimationWindowHierarchyNode): number;
    GetTotalSize(): any;
    GetRowRect(row: number, rowWidth: number): any;
    OnRowGUI(rowRect: any, node: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): any;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    OnInitialize(): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    EndRowGUI(): any;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    GetRectForFraming(row: number): any;
    BeginPingItem(item: UnityEditor.IMGUI.Controls.TreeViewItem, topPixelOfRow: number, availableWidth: number): any;
    EndPingItem(): any;
    EndRename(): any;
    DoRenameOverlay(): any;
    GetFoldoutIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    state: UnityEditorInternal.AnimationWindowState;
    iconLeftPadding: number;
    iconRightPadding: number;
    readonly iconTotalPadding: number;
    iconOverlayGUI: any;
    readonly indentWidth: number;
    readonly halfDropBetweenHeight: number;
    readonly topRowMargin: number;
    readonly bottomRowMargin: number;
    // fields
    static k_DopeSheetRowHeight: number;
    static k_DopeSheetRowHeightTall: number;
    static k_AddCurveButtonNodeHeight: number;
    static k_RowBackgroundColorBrightness: number;
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
