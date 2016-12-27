declare namespace UnityEditor {
  class ProjectBrowserColumnOneTreeViewDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    SetExpanded(id: number, expand: boolean): boolean;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): void;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsVisibleRootNode(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    static GetAssetsFolderInstanceID(): number;
    FetchData(): void;
    // properties
    // fields
  }
}
