declare namespace UnityEditorInternal.AudioProfilerGroupView {
  class AudioProfilerGroupViewColumnHeader {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerGroupTreeViewState, backend: UnityEditorInternal.AudioProfilerGroupViewBackend);
    // methods
    OnGUI(rect: any, allowSorting: boolean, headerStyle: any): void;
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
