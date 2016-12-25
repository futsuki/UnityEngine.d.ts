declare namespace UnityEditorInternal {
  class AudioProfilerClipTreeViewState {
    // constructors
    constructor();
    // methods
    SetSelectedColumn(index: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    selectedIDs: any;
    lastClickedID: number;
    expandedIDs: any;
    searchString: string;
    // fields
    selectedColumn: number;
    prevSelectedColumn: number;
    sortByDescendingOrder: boolean;
    scrollPos: any;
  }
}
