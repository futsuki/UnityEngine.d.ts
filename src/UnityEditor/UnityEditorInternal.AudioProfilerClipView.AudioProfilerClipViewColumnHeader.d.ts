declare namespace UnityEditorInternal.AudioProfilerClipView {
  class AudioProfilerClipViewColumnHeader {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerClipTreeViewState, backend: UnityEditorInternal.AudioProfilerClipViewBackend);
    // methods
    OnGUI(rect: any, allowSorting: boolean, headerStyle: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    columnWidths: number[];
    minColumnWidth: number;
    dragWidth: number;
    // fields
  }
}
