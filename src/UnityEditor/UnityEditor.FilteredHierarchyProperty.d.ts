declare namespace UnityEditor {
  class FilteredHierarchyProperty extends System.Object {
    // constructors
    constructor(filter: UnityEditor.FilteredHierarchy);
    // methods
    static CreateHierarchyPropertyForFilter(filteredHierarchy: UnityEditor.FilteredHierarchy): UnityEditor.IHierarchyProperty;
    Reset(): void;
    IsExpanded(expanded: number[]): boolean;
    Next(expanded: number[]): boolean;
    NextWithDepthCheck(expanded: number[], minDepth: number): boolean;
    Previous(expanded: number[]): boolean;
    Parent(): boolean;
    Find(_instanceID: number, expanded: number[]): boolean;
    FindAllAncestors(instanceIDs: number[]): number[];
    Skip(count: number, expanded: number[]): boolean;
    CountRemaining(expanded: number[]): number;
    // properties
    readonly instanceID: number;
    readonly pptrValue: UnityEngine.Object;
    readonly name: string;
    readonly hasChildren: boolean;
    readonly isMainRepresentation: boolean;
    readonly hasFullPreviewImage: boolean;
    readonly iconDrawStyle: UnityEditor.IconDrawStyle;
    readonly isFolder: boolean;
    readonly depth: number;
    readonly row: number;
    readonly colorCode: number;
    readonly guid: string;
    readonly isValid: boolean;
    readonly icon: any;
    readonly ancestors: number[];
    // fields
  }
}
