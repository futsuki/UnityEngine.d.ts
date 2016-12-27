declare namespace UnityEditor.IMGUI.Controls {
  class MultiColumnHeaderState extends System.Object {
    // constructors
    constructor(columns: UnityEditor.IMGUI.Controls.MultiColumnHeaderState.Column[]);
    // methods
    // properties
    sortedColumnIndex: number;
    readonly previousSortedColumnIndex: number;
    readonly columns: UnityEditor.IMGUI.Controls.MultiColumnHeaderState.Column[];
    visibleColumns: number[];
    readonly widthOfAllVisibleColumns: number;
    // fields
  }
}
