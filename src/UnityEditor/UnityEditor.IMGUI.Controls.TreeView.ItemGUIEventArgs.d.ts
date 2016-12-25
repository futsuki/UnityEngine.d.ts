declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class ItemGUIEventArgs {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
