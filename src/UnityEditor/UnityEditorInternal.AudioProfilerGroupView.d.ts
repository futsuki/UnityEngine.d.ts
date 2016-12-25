declare namespace UnityEditorInternal {
  class AudioProfilerGroupView {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, state: UnityEditorInternal.AudioProfilerGroupTreeViewState);
    // methods
    GetNumItemsInData(): number;
    Init(rect: any, backend: UnityEditorInternal.AudioProfilerGroupViewBackend): any;
    OnTreeSelectionChanged(selection: number[]): any;
    OnGUI(rect: any, allowSorting: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
