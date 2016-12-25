declare namespace UnityEditorInternal {
  class AudioProfilerClipView {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, state: UnityEditorInternal.AudioProfilerClipTreeViewState);
    // methods
    GetNumItemsInData(): number;
    Init(rect: any, backend: UnityEditorInternal.AudioProfilerClipViewBackend): any;
    OnTreeSelectionChanged(selection: number[]): any;
    OnGUI(rect: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
