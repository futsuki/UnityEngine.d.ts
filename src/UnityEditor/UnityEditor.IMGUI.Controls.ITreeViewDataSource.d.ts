declare namespace UnityEditor.IMGUI.Controls {
  class ITreeViewDataSource {
    // constructors
    protected constructor();
    // methods
    OnInitialize(): void;
    ReloadData(): void;
    InitIfNeeded(): void;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): UnityEditor.IMGUI.Controls.TreeViewItem[];
    IsRevealed(id: number): boolean;
    RevealItem(id: number): void;
    SetExpandedWithChildren(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpandedWithChildren(id: number, expand: boolean): void;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpanded(id: number, expand: boolean): boolean;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpanded(id: number): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): void;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): void;
    RemoveFakeItem(): void;
    HasFakeItem(): boolean;
    OnSearchChanged(): void;
    // properties
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly rowCount: number;
    // fields
  }
}
