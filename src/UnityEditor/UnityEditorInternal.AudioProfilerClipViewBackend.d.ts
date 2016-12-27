declare namespace UnityEditorInternal {
  class AudioProfilerClipViewBackend extends System.Object {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerClipTreeViewState);
    // methods
    SetData(data: UnityEditorInternal.AudioProfilerClipInfoWrapper[]): void;
    UpdateSorting(): void;
    // properties
    readonly items: UnityEditorInternal.AudioProfilerClipInfoWrapper[];
    // fields
    OnUpdate: (() => void);
    m_TreeViewState: UnityEditorInternal.AudioProfilerClipTreeViewState;
  }
}
