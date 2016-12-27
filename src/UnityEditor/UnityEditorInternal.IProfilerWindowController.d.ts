declare namespace UnityEditorInternal {
  class IProfilerWindowController {
    // constructors
    protected constructor();
    // methods
    SetSelectedPropertyPath(path: string): void;
    ClearSelectedPropertyPath(): void;
    CreateProperty(details: boolean): UnityEditorInternal.ProfilerProperty;
    GetActiveVisibleFrameIndex(): number;
    SetSearch(searchString: string): void;
    GetSearch(): string;
    IsSearching(): boolean;
    Repaint(): void;
    // properties
    // fields
  }
}
