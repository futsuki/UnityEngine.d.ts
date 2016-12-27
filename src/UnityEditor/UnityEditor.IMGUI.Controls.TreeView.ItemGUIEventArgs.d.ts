declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class ItemGUIEventArgs extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    item: UnityEditor.IMGUI.Controls.TreeViewItem;
    rowRect: any;
    cellRect: any;
    row: number;
    column: number;
    selected: boolean;
    focused: boolean;
    isRenaming: boolean;
    isDropTarget: boolean;
  }
}
