declare namespace UnityEditor.IMGUI.Controls {
  class ITreeViewDataSource {
    // constructors
    private constructor();
    // methods
    OnInitialize(): void;
    ReloadData(): void;
    InitIfNeeded(): void;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): any;
    IsRevealed(id: number): boolean;
    RevealItem(id: number): void;
    SetExpandedWithChildren(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    SetExpandedWithChildren(id: number, expand: boolean): void;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): void;
    SetExpanded(id: number, expand: boolean): boolean;
    IsExpanded(id: number): boolean;
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
