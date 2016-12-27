declare namespace UnityEditor {
  class SearchFilterTreeItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, isFolder: boolean);
    // methods
    // properties
    readonly isFolder: boolean;
    // fields
  }
}
