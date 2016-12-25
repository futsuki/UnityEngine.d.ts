declare namespace UnityEditor.TreeViewExamples {
  class LazyTestDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, data: UnityEditor.TreeViewExamples.BackendData);
    // methods
    FetchData(): any;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    RevealItem(itemID: number): any;
    FindItem(itemID: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    SetExpandedWithChildren(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): any;
    SetExpandedWithChildren(id: number, expand: boolean): any;
    InitIfNeeded(): any;
    GetRows(): any;
    OnInitialize(): any;
    ReloadData(): any;
    IsRevealed(id: number): boolean;
    OnSearchChanged(): any;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
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
    readonly itemCounter: number;
    showRootItem: boolean;
    rootIsCollapsable: boolean;
    alwaysAddFirstItemToSearchResult: boolean;
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly rowCount: number;
    // fields
    onVisibleRowsChanged: any;
  }
}
