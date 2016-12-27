declare namespace UnityEditor {
  class GameObjectTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, useHorizontalScroll: boolean);
    // methods
    OnInitialize(): void;
    BeginRowGUI(): void;
    EndRowGUI(): void;
    GetRectForFraming(row: number): any;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    // properties
    // fields
  }
}
