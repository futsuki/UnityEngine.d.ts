declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewItemExpansionAnimator extends System.Object {
    // constructors
    constructor();
    // methods
    BeginAnimating(setup: UnityEditor.IMGUI.Controls.TreeViewAnimationInput): void;
    CullRow(row: number, gui: UnityEditor.IMGUI.Controls.ITreeViewGUI): boolean;
    OnRowGUI(row: number): void;
    OnBeginRowGUI(row: number, rowRect: any): any;
    OnEndRowGUI(row: number): void;
    OnBeforeAllRowsGUI(): void;
    OnAfterAllRowsGUI(): void;
    IsAnimating(itemID: number): boolean;
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
