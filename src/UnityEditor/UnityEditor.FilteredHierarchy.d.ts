declare namespace UnityEditor {
  class FilteredHierarchy extends System.Object {
    // constructors
    constructor(type: UnityEditor.HierarchyType);
    // methods
    SetResults(instanceIDs: number[]): void;
    ResultsChanged(): void;
    RefreshVisibleItems(expandedInstanceIDs: number[]): void;
    GetSubAssetInstanceIDs(mainAssetInstanceID: number): number[];
    AddSubItemsOfMainRepresentation(mainRepresentionIndex: number, visibleItems: UnityEditor.FilteredHierarchy.FilterResult[]): number;
    // properties
    readonly hierarchyType: UnityEditor.HierarchyType;
    readonly results: UnityEditor.FilteredHierarchy.FilterResult[];
    searchFilter: UnityEditor.SearchFilter;
    foldersFirst: boolean;
    // fields
  }
}
