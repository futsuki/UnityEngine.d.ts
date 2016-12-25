declare namespace UnityEditor {
  class AssetsTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, rootInstanceID: number, showRootItem: boolean, rootItemIsCollapsable: boolean);
    // methods
    FetchData(): any;
    OnExpandedStateChanged(): any;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    GetInsertAfterItemIDForNewItem(newName: string, parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, isCreatingNewFolder: boolean, foldersFirst: boolean): number;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): any;
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
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    HasFakeItem(): boolean;
    RemoveFakeItem(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    foldersOnly: boolean;
    foldersFirst: boolean;
    showRootItem: boolean;
    rootIsCollapsable: boolean;
    alwaysAddFirstItemToSearchResult: boolean;
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly rowCount: number;
    // fields
    onVisibleRowsChanged: any;
  }
}
