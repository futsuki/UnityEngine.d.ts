declare namespace UnityEditor.TreeViewExamples {
  class TestGUICustomItemHeights extends UnityEditor.TreeViewGUIWithCustomItemsHeights {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    BeginRowGUI(): void;
    EndRowGUI(): void;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    // properties
    // fields
  }
}
