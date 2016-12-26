declare namespace UnityEditor {
  class GameObjectsTreeViewDragging {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    CanStartDrag(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: any, mouseDownPosition: any): boolean;
    StartDrag(draggedItem: UnityEditor.IMGUI.Controls.TreeViewItem, draggedItemIDs: any): void;
    DoDrag(parentItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, perform: boolean, dropPos: UnityEditor.IMGUI.Controls.TreeViewDragging.DropPosition): UnityEditor.DragAndDropVisualMode;
    DragCleanup(revertExpanded: boolean): void;
    OnInitialize(): void;
    GetDropTargetControlID(): number;
    GetRowMarkerControlID(): number;
    DragElement(targetItem: UnityEditor.IMGUI.Controls.TreeViewItem, targetItemRect: any, firstItem: boolean): boolean;
    GetCurrentExpanded(): any;
    RestoreExpanded(ids: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    allowDragBetween: boolean;
    drawRowMarkerAbove: boolean;
    // fields
  }
}
