declare namespace UnityEditorInternal.ProfilerHierarchyGUI {
  class SearchResults {
    // constructors
    constructor();
    // methods
    Init(maxNumberSearchResults: number): void;
    Filter(property: UnityEditorInternal.ProfilerProperty, columns: UnityEditorInternal.ProfilerColumn[], searchString: string, frameIndex: number, sortType: UnityEditorInternal.ProfilerColumn): void;
    Draw(gui: UnityEditorInternal.ProfilerHierarchyGUI, controlID: number): void;
    MoveSelection(steps: number, gui: UnityEditorInternal.ProfilerHierarchyGUI): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly numRows: number;
    selectedSearchIndex: number;
    // fields
  }
}
