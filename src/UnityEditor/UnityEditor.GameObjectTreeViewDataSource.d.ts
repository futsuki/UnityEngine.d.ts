declare namespace UnityEditor {
  class GameObjectTreeViewDataSource extends UnityEditor.IMGUI.Controls.LazyTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, rootInstanceID: number, showRoot: boolean, rootItemIsCollapsable: boolean);
    // methods
    OnInitialize(): void;
    EnsureFullyInitialized(): void;
    RevealItem(itemID: number): void;
    IsRevealed(id: number): boolean;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): UnityEditor.IMGUI.Controls.TreeViewItem[];
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    FetchData(): void;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    readonly sceneHeaderItems: UnityEditor.GameObjectTreeViewItem[];
    searchString: string;
    searchMode: number;
    readonly isFetchAIssue: boolean;
    readonly rowCount: number;
    // fields
    sortingState: UnityEditor.HierarchySorting;
  }
}
