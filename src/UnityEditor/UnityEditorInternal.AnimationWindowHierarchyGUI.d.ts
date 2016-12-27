declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyGUI {
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
    OnInitialize(): void;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    EndRowGUI(): void;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    GetRectForFraming(row: number): any;
    BeginPingItem(item: UnityEditor.IMGUI.Controls.TreeViewItem, topPixelOfRow: number, availableWidth: number): void;
    EndPingItem(): void;
    EndRename(): void;
    DoRenameOverlay(): void;
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
    iconOverlayGUI: ((UnityEditor.IMGUI.Controls.TreeViewItem, any) => void);
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
