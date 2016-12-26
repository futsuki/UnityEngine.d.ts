declare namespace UnityEditorInternal {
  class AddCurvesPopupHierarchyGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.EditorWindow);
    // methods
    OnRowGUI(rowRect: any, node: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    OnInitialize(): void;
    GetTotalSize(): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    BeginRowGUI(): void;
    EndRowGUI(): void;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    GetRowRect(row: number, rowWidth: number): any;
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
    showPlusButton: boolean;
    iconLeftPadding: number;
    iconRightPadding: number;
    readonly iconTotalPadding: number;
    iconOverlayGUI: any;
    readonly indentWidth: number;
    readonly halfDropBetweenHeight: number;
    readonly topRowMargin: number;
    readonly bottomRowMargin: number;
    // fields
    owner: UnityEditor.EditorWindow;
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
