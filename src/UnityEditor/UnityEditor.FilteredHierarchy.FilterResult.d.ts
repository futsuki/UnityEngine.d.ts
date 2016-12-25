declare namespace UnityEditor.FilteredHierarchy {
  class FilterResult {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    icon: any;
    readonly guid: string;
    // fields
    instanceID: number;
    name: string;
    hasChildren: boolean;
    colorCode: number;
    isMainRepresentation: boolean;
    hasFullPreviewImage: boolean;
    iconDrawStyle: UnityEditor.IconDrawStyle;
    isFolder: boolean;
    type: UnityEditor.HierarchyType;
  }
}
