declare namespace UnityEditor.IMGUI.Controls {
  class MultiColumnHeaderState {
    // constructors
    constructor(columns: UnityEditor.IMGUI.Controls.MultiColumnHeaderState.Column[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    sortedColumnIndex: number;
    readonly previousSortedColumnIndex: number;
    readonly columns: UnityEditor.IMGUI.Controls.MultiColumnHeaderState.Column[];
    visibleColumns: number[];
    readonly widthOfAllVisibleColumns: number;
    // fields
  }
}
