declare namespace UnityEditorInternal.ProfilerHierarchyGUI {
  class SearchResults extends System.Object {
    // constructors
    constructor();
    // methods
    Init(maxNumberSearchResults: number): void;
    Filter(property: UnityEditorInternal.ProfilerProperty, columns: UnityEditorInternal.ProfilerColumn[], searchString: string, frameIndex: number, sortType: UnityEditorInternal.ProfilerColumn): void;
    Draw(gui: UnityEditorInternal.ProfilerHierarchyGUI, controlID: number): void;
    MoveSelection(steps: number, gui: UnityEditorInternal.ProfilerHierarchyGUI): void;
    // properties
    readonly numRows: number;
    selectedSearchIndex: number;
    // fields
  }
}
