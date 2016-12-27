declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewDragging extends System.Object {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    OnInitialize(): void;
    GetDropTargetControlID(): number;
    GetRowMarkerControlID(): number;
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[], mouseDownPosition: any): boolean;
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: number[]): void;
    DoDrag(parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dropPosition: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    DragElement(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItemRect: any, firstItem: boolean): boolean;
    DragCleanup(revertExpanded: boolean): void;
    GetCurrentExpanded(): number[];
    RestoreExpanded(ids: number[]): void;
    // properties
    drawRowMarkerAbove: boolean;
    // fields
  }
}
