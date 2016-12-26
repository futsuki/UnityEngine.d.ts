declare namespace UnityEditor.TreeViewExamples {
  class LazyTestDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, data: UnityEditor.TreeViewExamples.BackendData);
    // methods
    FetchData(): void;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    RevealItem(itemID: number): void;
    FindItem(itemID: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    SetExpandedWithChildren(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpandedWithChildren(id: number, expand: boolean): void;
    InitIfNeeded(): void;
    GetRows(): any;
    OnInitialize(): void;
    ReloadData(): void;
    IsRevealed(id: number): boolean;
    OnSearchChanged(): void;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): void;
    IsExpanded(id: number): boolean;
    SetExpanded(id: number, expand: boolean): boolean;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnExpandedStateChanged(): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): void;
    HasFakeItem(): boolean;
    RemoveFakeItem(): void;
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
