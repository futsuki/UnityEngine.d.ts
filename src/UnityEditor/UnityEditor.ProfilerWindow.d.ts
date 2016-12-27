declare namespace UnityEditor {
  class ProfilerWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    SetSelectedPropertyPath(path: string): void;
    ClearSelectedPropertyPath(): void;
    CreateProperty(details: boolean): UnityEditorInternal.ProfilerProperty;
    GetActiveVisibleFrameIndex(): number;
    SetSearch(searchString: string): void;
    GetSearch(): string;
    IsSearching(): boolean;
    // properties
    // fields
  }
}
