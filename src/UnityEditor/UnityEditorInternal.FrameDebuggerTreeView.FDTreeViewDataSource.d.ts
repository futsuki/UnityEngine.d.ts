declare namespace UnityEditorInternal.FrameDebuggerTreeView {
  class FDTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, frameEvents: UnityEditorInternal.FrameDebuggerEvent[]);
    // methods
    SetEvents(frameEvents: UnityEditorInternal.FrameDebuggerEvent[]): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    FetchData(): void;
    OnInitialize(): void;
    ReloadData(): void;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    IsRevealed(id: number): boolean;
    RevealItem(id: number): void;
    OnSearchChanged(): void;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): any;
    InitIfNeeded(): void;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): void;
    IsExpanded(id: number): boolean;
    SetExpanded(id: number, expand: boolean): boolean;
    SetExpandedWithChildren(id: number, expand: boolean): void;
    SetExpandedWithChildren(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnExpandedStateChanged(): void;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): void;
    HasFakeItem(): boolean;
    RemoveFakeItem(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    showRootItem: boolean;
    rootIsCollapsable: boolean;
    alwaysAddFirstItemToSearchResult: boolean;
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly rowCount: number;
    // fields
    onVisibleRowsChanged: any;
  }
}
