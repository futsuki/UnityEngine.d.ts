declare namespace UnityEditorInternal {
  class AudioProfilerGroupView {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, state: UnityEditorInternal.AudioProfilerGroupTreeViewState);
    // methods
    GetNumItemsInData(): number;
    Init(rect: any, backend: UnityEditorInternal.AudioProfilerGroupViewBackend): void;
    OnTreeSelectionChanged(selection: number[]): void;
    OnGUI(rect: any, allowSorting: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
