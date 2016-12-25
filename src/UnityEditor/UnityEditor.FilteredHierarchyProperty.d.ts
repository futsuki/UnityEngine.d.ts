declare namespace UnityEditor {
  class FilteredHierarchyProperty {
    // constructors
    constructor(filter: UnityEditor.FilteredHierarchy);
    // methods
    static CreateHierarchyPropertyForFilter(filteredHierarchy: UnityEditor.FilteredHierarchy): UnityEditor.IHierarchyProperty;
    Reset(): any;
    IsExpanded(expanded: number[]): boolean;
    Next(expanded: number[]): boolean;
    NextWithDepthCheck(expanded: number[], minDepth: number): boolean;
    Previous(expanded: number[]): boolean;
    Parent(): boolean;
    Find(_instanceID: number, expanded: number[]): boolean;
    FindAllAncestors(instanceIDs: number[]): number[];
    Skip(count: number, expanded: number[]): boolean;
    CountRemaining(expanded: number[]): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly instanceID: number;
    readonly pptrValue: any;
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
