declare namespace UnityEditorInternal {
  class AudioProfilerClipTreeViewState extends UnityEditor.IMGUI.Controls.TreeViewState {
    // constructors
    constructor();
    // methods
    SetSelectedColumn(index: number): void;
    // properties
    // fields
    selectedColumn: number;
    prevSelectedColumn: number;
    sortByDescendingOrder: boolean;
  }
}
