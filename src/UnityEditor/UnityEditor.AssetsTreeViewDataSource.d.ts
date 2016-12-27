declare namespace UnityEditor {
  class AssetsTreeViewDataSource extends UnityEditor.IMGUI.Controls.LazyTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, rootInstanceID: number, showRootItem: boolean, rootItemIsCollapsable: boolean);
    // methods
    FetchData(): void;
    OnExpandedStateChanged(): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    GetInsertAfterItemIDForNewItem(newName: string, parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, isCreatingNewFolder: boolean, foldersFirst: boolean): number;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): void;
    // properties
    foldersOnly: boolean;
    foldersFirst: boolean;
    // fields
  }
}
