declare namespace UnityEditorInternal {
  class AudioProfilerClipView extends System.Object {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, state: UnityEditorInternal.AudioProfilerClipTreeViewState);
    // methods
    GetNumItemsInData(): number;
    Init(rect: any, backend: UnityEditorInternal.AudioProfilerClipViewBackend): void;
    OnTreeSelectionChanged(selection: number[]): void;
    OnGUI(rect: any): void;
    // properties
    // fields
  }
}
