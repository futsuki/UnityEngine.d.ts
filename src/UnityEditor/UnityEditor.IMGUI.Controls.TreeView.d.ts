declare namespace UnityEditor.IMGUI.Controls {
  class TreeView extends System.Object {
    // constructors
    constructor(state: UnityEditor.IMGUI.Controls.TreeViewState);
    constructor(state: UnityEditor.IMGUI.Controls.TreeViewState, multiColumnHeader: UnityEditor.IMGUI.Controls.MultiColumnHeader);
    // methods
    Reload(): void;
    GetCellRectForTreeFoldouts(rowRect: any): any;
    SetCustomRowHeights(rowHeights: number[]): void;
    GetRows(): UnityEditor.IMGUI.Controls.TreeViewItem[];
    GetRowsFromIDs(ids: number[]): UnityEditor.IMGUI.Controls.TreeViewItem[];
    ExpandAll(): void;
    CollapseAll(): void;
    SetExpandedRecursive(id: number, expanded: boolean): void;
    SetExpanded(id: number, expanded: boolean): boolean;
    SetExpanded(ids: number[]): void;
    GetExpanded(): number[];
    IsExpanded(id: number): boolean;
    GetSelection(): number[];
    SetSelection(selectedIDs: number[]): void;
    SetSelection(selectedIDs: number[], options: UnityEditor.IMGUI.Controls.TreeViewSelectionOptions): void;
    IsSelected(id: number): boolean;
    HasSelection(): boolean;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    EndRename(): void;
    FrameItem(id: number): void;
    OnGUI(rect: any): void;
    GetFoldoutIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    static CreateChildListForCollapsedParent(): UnityEditor.IMGUI.Controls.TreeViewItem[];
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
