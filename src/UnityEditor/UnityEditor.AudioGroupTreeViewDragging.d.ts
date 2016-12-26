declare namespace UnityEditor {
  class AudioGroupTreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, owner: UnityEditor.AudioMixerGroupTreeView);
    // methods
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: any): void;
    DoDrag(parentNode: UnityEditor.IMGUI.Controls.TreeViewItem, targetNode: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dragPos: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    OnInitialize(): void;
    GetDropTargetControlID(): number;
    GetRowMarkerControlID(): number;
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: any, mouseDownPosition: any): boolean;
    DragElement(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItemRect: any, firstItem: boolean): boolean;
    DragCleanup(revertExpanded: boolean): void;
    GetCurrentExpanded(): any;
    RestoreExpanded(ids: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    drawRowMarkerAbove: boolean;
    // fields
  }
}
