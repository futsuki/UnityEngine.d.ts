declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewDataSource extends System.Object {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    OnInitialize(): void;
    FetchData(): void;
    ReloadData(): void;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    IsRevealed(id: number): boolean;
    RevealItem(id: number): void;
    OnSearchChanged(): void;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): UnityEditor.IMGUI.Controls.TreeViewItem[];
    InitIfNeeded(): void;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): void;
    IsExpanded(id: number): boolean;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    SetExpanded(id: number, expand: boolean): boolean;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpandedWithChildren(id: number, expand: boolean): void;
    SetExpandedWithChildren(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnExpandedStateChanged(): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): void;
    HasFakeItem(): boolean;
    RemoveFakeItem(): void;
    // properties
    showRootItem: boolean;
    rootIsCollapsable: boolean;
    alwaysAddFirstItemToSearchResult: boolean;
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly rowCount: number;
    // fields
    onVisibleRowsChanged: (() => void);
  }
}
