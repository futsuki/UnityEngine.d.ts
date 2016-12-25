declare namespace UnityEditor.IMGUI.Controls.TreeViewDragging {
  class DropData {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    expandedArrayBeforeDrag: number[];
    lastControlID: number;
    dropTargetControlID: number;
    rowMarkerControlID: number;
    expandItemBeginTimer: number;
    expandItemBeginPosition: any;
  }
}
