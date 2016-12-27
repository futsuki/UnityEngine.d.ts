declare namespace UnityEditorInternal {
  class AddCurvesPopupHierarchyDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    FetchData(): void;
    UpdateData(): void;
    // properties
    static showEntireHierarchy: boolean;
    // fields
  }
}
