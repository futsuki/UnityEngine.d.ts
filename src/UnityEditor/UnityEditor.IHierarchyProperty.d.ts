declare namespace UnityEditor {
  class IHierarchyProperty {
    // constructors
    protected constructor();
    // methods
    Reset(): void;
    IsExpanded(expanded: number[]): boolean;
    Next(expanded: number[]): boolean;
    NextWithDepthCheck(expanded: number[], minDepth: number): boolean;
    Previous(expanded: number[]): boolean;
    Parent(): boolean;
    Find(instanceID: number, expanded: number[]): boolean;
    FindAllAncestors(instanceIDs: number[]): number[];
    Skip(count: number, expanded: number[]): boolean;
    CountRemaining(expanded: number[]): number;
    // properties
    readonly instanceID: number;
    readonly pptrValue: UnityEngine.Object;
    readonly name: string;
    readonly hasChildren: boolean;
    readonly depth: number;
    readonly row: number;
    readonly colorCode: number;
    readonly guid: string;
    readonly icon: any;
    readonly isValid: boolean;
    readonly isMainRepresentation: boolean;
    readonly hasFullPreviewImage: boolean;
    readonly iconDrawStyle: UnityEditor.IconDrawStyle;
    readonly isFolder: boolean;
    readonly ancestors: number[];
    // fields
  }
}
