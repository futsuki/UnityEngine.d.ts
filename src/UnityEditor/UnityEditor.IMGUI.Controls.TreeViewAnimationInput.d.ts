declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewAnimationInput {
    // constructors
    constructor();
    // methods
    FireAnimationEndedEvent(): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly elapsedTimeNormalized: number;
    elapsedTime: number;
    startRow: number;
    endRow: number;
    rowsRect: any;
    startRowRect: any;
    startTime: number;
    animationDuration: number;
    expanding: boolean;
    item: UnityEditor.IMGUI.Controls.TreeViewItem;
    treeView: UnityEditor.IMGUI.Controls.TreeViewController;
    // fields
    animationEnded: any;
  }
}
