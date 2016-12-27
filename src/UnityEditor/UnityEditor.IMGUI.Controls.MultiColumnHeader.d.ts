declare namespace UnityEditor.IMGUI.Controls {
  class MultiColumnHeader extends System.Object {
    // constructors
    constructor(state: UnityEditor.IMGUI.Controls.MultiColumnHeaderState);
    // methods
    SetSortDirection(columnIndex: number, sortAscending: boolean): void;
    IsSortedAscending(columnIndex: number): boolean;
    GetColumn(columnIndex: number): UnityEditor.IMGUI.Controls.MultiColumnHeaderState.Column;
    GetVisibleColumnIndex(columnIndex: number): number;
    GetCellRect(visibleColumnIndex: number, rowRect: any): any;
    GetColumnRect(visibleColumnIndex: number): any;
    OnGUI(rect: any, xScroll: number): void;
    Repaint(): void;
    // properties
    sortedColumnIndex: number;
    readonly previousSortedColumnIndex: number;
    state: UnityEditor.IMGUI.Controls.MultiColumnHeaderState;
    height: number;
    canSort: boolean;
    // fields
  }
}
