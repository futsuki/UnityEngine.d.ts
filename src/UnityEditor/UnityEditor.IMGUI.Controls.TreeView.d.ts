declare namespace UnityEditor.IMGUI.Controls {
  class TreeView {
    // constructors
    constructor(state: UnityEditor.IMGUI.Controls.TreeViewState);
    constructor(state: UnityEditor.IMGUI.Controls.TreeViewState, multiColumnHeader: UnityEditor.IMGUI.Controls.MultiColumnHeader);
    // methods
    Reload(): any;
    GetCellRectForTreeFoldouts(rowRect: any): any;
    SetCustomRowHeights(rowHeights: any): any;
    GetRows(): any;
    GetRowsFromIDs(ids: any): any;
    ExpandAll(): any;
    CollapseAll(): any;
    SetExpandedRecursive(id: number, expanded: boolean): any;
    SetExpanded(id: number, expanded: boolean): boolean;
    SetExpanded(ids: any): any;
    GetExpanded(): any;
    IsExpanded(id: number): boolean;
    GetSelection(): any;
    SetSelection(selectedIDs: any): any;
    SetSelection(selectedIDs: any, options: UnityEditor.IMGUI.Controls.TreeViewSelectionOptions): any;
    IsSelected(id: number): boolean;
    HasSelection(): boolean;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    EndRename(): any;
    FrameItem(id: number): any;
    OnGUI(rect: any): any;
    GetFoldoutIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    static CreateChildListForCollapsedParent(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly state: UnityEditor.IMGUI.Controls.TreeViewState;
    readonly multiColumnHeader: UnityEditor.IMGUI.Controls.MultiColumnHeader;
    treeViewRect: any;
    baseIndent: number;
    readonly foldoutWidth: number;
    foldoutYOffset: number;
    columnIndexForTreeFoldouts: number;
    readonly depthIndentWidth: number;
    rowHeight: number;
    readonly treeViewControlID: number;
    readonly rootItem: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly isDragging: boolean;
    readonly hasSearch: boolean;
    searchString: string;
    // fields
  }
}