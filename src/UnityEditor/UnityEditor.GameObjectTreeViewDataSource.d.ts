declare namespace UnityEditor {
  class GameObjectTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, rootInstanceID: number, showRoot: boolean, rootItemIsCollapsable: boolean);
    // methods
    OnInitialize(): any;
    EnsureFullyInitialized(): any;
    RevealItem(itemID: number): any;
    IsRevealed(id: number): boolean;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): any;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    FetchData(): any;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    SetExpandedWithChildren(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): any;
    SetExpandedWithChildren(id: number, expand: boolean): any;
    InitIfNeeded(): any;
    ReloadData(): any;
    OnSearchChanged(): any;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): any;
    IsExpanded(id: number): boolean;
    SetExpanded(id: number, expand: boolean): boolean;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): any;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnExpandedStateChanged(): any;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): any;
    HasFakeItem(): boolean;
    RemoveFakeItem(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly sceneHeaderItems: any;
    searchString: string;
    searchMode: number;
    readonly isFetchAIssue: boolean;
    readonly rowCount: number;
    showRootItem: boolean;
    rootIsCollapsable: boolean;
    alwaysAddFirstItemToSearchResult: boolean;
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    // fields
    sortingState: UnityEditor.HierarchySorting;
    onVisibleRowsChanged: any;
  }
}
