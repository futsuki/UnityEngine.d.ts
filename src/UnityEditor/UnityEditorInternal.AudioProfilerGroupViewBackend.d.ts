declare namespace UnityEditorInternal {
  class AudioProfilerGroupViewBackend extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerGroupTreeViewState);
    // methods
    SetData(data: UnityEditorInternal.AudioProfilerGroupInfoWrapper[]): void;
    UpdateSorting(): void;
    // properties
    readonly items: UnityEditorInternal.AudioProfilerGroupInfoWrapper[];
    // fields
    OnUpdate: (() => void);
    m_TreeViewState: UnityEditorInternal.AudioProfilerGroupTreeViewState;
  }
}
