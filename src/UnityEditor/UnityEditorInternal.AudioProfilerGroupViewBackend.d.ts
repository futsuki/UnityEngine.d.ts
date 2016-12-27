declare namespace UnityEditorInternal {
  class AudioProfilerGroupViewBackend {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerGroupTreeViewState);
    // methods
    SetData(data: any): void;
    UpdateSorting(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly items: any;
    // fields
    OnUpdate: (() => void);
    m_TreeViewState: UnityEditorInternal.AudioProfilerGroupTreeViewState;
  }
}
