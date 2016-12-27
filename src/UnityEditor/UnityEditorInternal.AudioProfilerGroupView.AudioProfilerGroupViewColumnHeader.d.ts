declare namespace UnityEditorInternal.AudioProfilerGroupView {
  class AudioProfilerGroupViewColumnHeader extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerGroupTreeViewState, backend: UnityEditorInternal.AudioProfilerGroupViewBackend);
    // methods
    OnGUI(rect: any, allowSorting: boolean, headerStyle: any): void;
    // properties
    columnWidths: number[];
    minColumnWidth: number;
    dragWidth: number;
    // fields
  }
}
