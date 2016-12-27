declare namespace UnityEditor {
  class ProjectBrowserColumnOneTreeViewDragging extends UnityEditor.AssetsTreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[]): void;
    DoDrag(parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dropPos: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    // properties
    // fields
  }
}
