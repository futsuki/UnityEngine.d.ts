declare namespace UnityEditorInternal {
  class AddCurvesPopupHierarchyGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.EditorWindow);
    // methods
    OnRowGUI(rowRect: any, node: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    // properties
    showPlusButton: boolean;
    // fields
    owner: UnityEditor.EditorWindow;
  }
}
