declare namespace UnityEditor {
  class AudioMixerTreeViewDragging extends UnityEditor.IMGUI.Controls.TreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, mixerDroppedOnMixerCallback: ((arg1: UnityEditor.Audio.AudioMixerController[], arg2: UnityEditor.Audio.AudioMixerController) => void));
    // methods
    StartDrag(draggedNode: UnityEditor.IMGUI.Controls.TreeViewItem, draggedNodes: number[]): void;
    DragElement(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItemRect: any, firstItem: boolean): boolean;
    DoDrag(parentNode: UnityEditor.IMGUI.Controls.TreeViewItem, targetNode: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dragPos: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    // properties
    // fields
  }
}
