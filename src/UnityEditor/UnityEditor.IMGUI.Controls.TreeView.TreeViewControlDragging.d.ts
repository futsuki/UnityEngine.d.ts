declare namespace UnityEditor.IMGUI.Controls.TreeView {
  class TreeViewControlDragging extends UnityEditor.IMGUI.Controls.TreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.IMGUI.Controls.TreeView);
    // methods
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[], mouseDownPosition: any): boolean;
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[]): void;
    DoDrag(parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dropPosition: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    // properties
    // fields
  }
}
