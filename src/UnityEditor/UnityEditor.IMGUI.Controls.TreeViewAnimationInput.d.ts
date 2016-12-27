declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewAnimationInput extends System.Object {
    // constructors
    constructor();
    // methods
    FireAnimationEndedEvent(): void;
    ToString(): string;
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
    animationEnded: ((obj: UnityEditor.IMGUI.Controls.TreeViewAnimationInput) => void);
  }
}
