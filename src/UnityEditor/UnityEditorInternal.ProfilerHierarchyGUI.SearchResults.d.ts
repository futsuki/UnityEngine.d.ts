declare namespace UnityEditorInternal.ProfilerHierarchyGUI {
  class SearchResults {
    // constructors
    constructor();
    // methods
    Init(maxNumberSearchResults: number): any;
    Filter(property: UnityEditorInternal.ProfilerProperty, columns: UnityEditorInternal.ProfilerColumn[], searchString: string, frameIndex: number, sortType: UnityEditorInternal.ProfilerColumn): any;
    Draw(gui: UnityEditorInternal.ProfilerHierarchyGUI, controlID: number): any;
    MoveSelection(steps: number, gui: UnityEditorInternal.ProfilerHierarchyGUI): any;
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
