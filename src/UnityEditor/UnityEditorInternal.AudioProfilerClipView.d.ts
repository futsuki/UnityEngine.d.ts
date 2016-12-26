declare namespace UnityEditorInternal {
  class AudioProfilerClipView {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, state: UnityEditorInternal.AudioProfilerClipTreeViewState);
    // methods
    GetNumItemsInData(): number;
    Init(rect: any, backend: UnityEditorInternal.AudioProfilerClipViewBackend): void;
    OnTreeSelectionChanged(selection: number[]): void;
    OnGUI(rect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
