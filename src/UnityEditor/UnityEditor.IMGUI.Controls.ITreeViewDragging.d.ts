declare namespace UnityEditor.IMGUI.Controls {
  class ITreeViewDragging {
    // constructors
    private constructor();
    // methods
    OnInitialize(): void;
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: any, mouseDownPosition: any): boolean;
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: any): void;
    DragElement(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItemRect: any, firstItem: boolean): boolean;
    DragCleanup(revertExpanded: boolean): void;
    GetDropTargetControlID(): number;
    GetRowMarkerControlID(): number;
    // properties
    drawRowMarkerAbove: boolean;
    // fields
  }
}
