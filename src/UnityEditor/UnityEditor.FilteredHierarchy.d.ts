declare namespace UnityEditor {
  class FilteredHierarchy {
    // constructors
    constructor(type: UnityEditor.HierarchyType);
    // methods
    SetResults(instanceIDs: number[]): void;
    ResultsChanged(): void;
    RefreshVisibleItems(expandedInstanceIDs: any): void;
    GetSubAssetInstanceIDs(mainAssetInstanceID: number): any;
    AddSubItemsOfMainRepresentation(mainRepresentionIndex: number, visibleItems: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly hierarchyType: UnityEditor.HierarchyType;
    readonly results: UnityEditor.FilteredHierarchy.FilterResult[];
    searchFilter: UnityEditor.SearchFilter;
    foldersFirst: boolean;
    // fields
  }
}
