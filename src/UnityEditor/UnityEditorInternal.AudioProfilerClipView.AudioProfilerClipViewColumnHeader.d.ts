declare namespace UnityEditorInternal.AudioProfilerClipView {
  class AudioProfilerClipViewColumnHeader extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerClipTreeViewState, backend: UnityEditorInternal.AudioProfilerClipViewBackend);
    // methods
    OnGUI(rect: any, allowSorting: boolean, headerStyle: any): void;
    // properties
    columnWidths: number[];
    minColumnWidth: number;
    dragWidth: number;
    // fields
  }
}
