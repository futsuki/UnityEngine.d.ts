declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewItemExpansionAnimator {
    // constructors
    constructor();
    // methods
    BeginAnimating(setup: UnityEditor.IMGUI.Controls.TreeViewAnimationInput): any;
    CullRow(row: number, gui: UnityEditor.IMGUI.Controls.ITreeViewGUI): boolean;
    OnRowGUI(row: number): any;
    OnBeginRowGUI(row: number, rowRect: any): any;
    OnEndRowGUI(row: number): any;
    OnBeforeAllRowsGUI(): any;
    OnAfterAllRowsGUI(): any;
    IsAnimating(itemID: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly expandedValueNormalized: number;
    readonly startRow: number;
    readonly endRow: number;
    readonly deltaHeight: number;
    readonly isAnimating: boolean;
    readonly isExpanding: boolean;
    // fields
  }
}
