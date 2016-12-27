declare namespace UnityEditor {
  class SketchUpDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, nodes: UnityEditor.SketchUpNodeInfo[]);
    // methods
    FetchEnableNodes(): number[];
    FetchData(): void;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    // fields
  }
}
