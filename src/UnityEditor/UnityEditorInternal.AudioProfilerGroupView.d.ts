declare namespace UnityEditorInternal {
  class AudioProfilerGroupView extends System.Object {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, state: UnityEditorInternal.AudioProfilerGroupTreeViewState);
    // methods
    GetNumItemsInData(): number;
    Init(rect: any, backend: UnityEditorInternal.AudioProfilerGroupViewBackend): void;
    OnTreeSelectionChanged(selection: number[]): void;
    OnGUI(rect: any, allowSorting: boolean): void;
    // properties
    // fields
  }
}
