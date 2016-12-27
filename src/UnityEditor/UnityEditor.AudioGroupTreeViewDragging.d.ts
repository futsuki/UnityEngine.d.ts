declare namespace UnityEditor {
  class AudioGroupTreeViewDragging extends UnityEditor.AssetsTreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.AudioMixerGroupTreeView);
    // methods
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[]): void;
    DoDrag(parentNode: UnityEditor.IMGUI.Controls.TreeViewItem, targetNode: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dragPos: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    // properties
    // fields
  }
}
