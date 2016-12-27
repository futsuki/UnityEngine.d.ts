declare namespace UnityEditor.TreeViewExamples {
  class LazyTestDataSource extends UnityEditor.IMGUI.Controls.LazyTreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, data: UnityEditor.TreeViewExamples.BackendData);
    // methods
    FetchData(): void;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    // properties
    readonly itemCounter: number;
    // fields
  }
}
