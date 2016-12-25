declare namespace UnityEditorInternal {
  class AudioProfilerGroupViewBackend {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerGroupTreeViewState);
    // methods
    SetData(data: any): any;
    UpdateSorting(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly items: any;
    // fields
    OnUpdate: UnityEditorInternal.AudioProfilerGroupViewBackend.DataUpdateDelegate;
    m_TreeViewState: UnityEditorInternal.AudioProfilerGroupTreeViewState;
  }
}
