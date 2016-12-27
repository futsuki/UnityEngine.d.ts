declare namespace UnityEditor {
  class GameObjectsTreeViewDragging extends UnityEditor.IMGUI.Controls.TreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[], mouseDownPosition: any): boolean;
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[]): void;
    DoDrag(parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dropPos: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    DragCleanup(revertExpanded: boolean): void;
    // properties
    allowDragBetween: boolean;
    // fields
  }
}
