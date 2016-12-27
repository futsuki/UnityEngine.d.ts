declare namespace UnityEditor {
  class SketchUpTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    OnRowGUI(rowRect: any, node: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    // properties
    // fields
  }
}
