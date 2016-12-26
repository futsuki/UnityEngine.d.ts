declare namespace UnityEditor {
  class HierarchyProperty {
    // constructors
    constructor(hierarchytType: UnityEditor.HierarchyType);
    // methods
    Reset(): void;
    GetScene(): any;
    IsExpanded(expanded: number[]): boolean;
    Next(expanded: number[]): boolean;
    NextWithDepthCheck(expanded: number[], minDepth: number): boolean;
    Previous(expanded: number[]): boolean;
    Parent(): boolean;
    Find(instanceID: number, expanded: number[]): boolean;
    Skip(count: number, expanded: number[]): boolean;
    CountRemaining(expanded: number[]): number;
    SetSearchFilter(searchString: string, mode: number): void;
    FindAllAncestors(instanceIDs: number[]): number[];
    static ClearSceneObjectsFilter(): void;
    static FilterSingleSceneObject(instanceID: number, otherVisibilityState: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly instanceID: number;
    readonly pptrValue: any;
    readonly name: string;
    readonly hasChildren: boolean;
    readonly depth: number;
    readonly ancestors: number[];
    readonly row: number;
    readonly colorCode: number;
    readonly guid: string;
    alphaSorted: boolean;
    readonly isValid: boolean;
    readonly isMainRepresentation: boolean;
    readonly hasFullPreviewImage: boolean;
    readonly iconDrawStyle: UnityEditor.IconDrawStyle;
    readonly isFolder: boolean;
    readonly icon: any;
    // fields
  }
}
