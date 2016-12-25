declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyState {
    // constructors
    constructor();
    // methods
    GetTallMode(node: UnityEditorInternal.AnimationWindowHierarchyNode): boolean;
    SetTallMode(node: UnityEditorInternal.AnimationWindowHierarchyNode, tallMode: boolean): any;
    GetTallInstancesCount(): number;
    AddTallInstance(id: number): any;
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
    scrollPos: any;
  }
}
