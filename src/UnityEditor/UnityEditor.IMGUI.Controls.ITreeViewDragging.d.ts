declare namespace UnityEditor.IMGUI.Controls {
  class ITreeViewDragging {
    // constructors
    protected constructor();
    // methods
    OnInitialize(): void;
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[], mouseDownPosition: any): boolean;
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[]): void;
    DragElement(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItemRect: any, firstItem: boolean): boolean;
    DragCleanup(revertExpanded: boolean): void;
    GetDropTargetControlID(): number;
    GetRowMarkerControlID(): number;
    // properties
    drawRowMarkerAbove: boolean;
    // fields
  }
}
