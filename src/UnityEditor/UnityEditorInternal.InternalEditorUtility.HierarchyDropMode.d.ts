declare namespace UnityEditorInternal.InternalEditorUtility {
  class HierarchyDropMode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static kHierarchyDragNormal: UnityEditorInternal.InternalEditorUtility.HierarchyDropMode;
    static kHierarchyDropUpon: UnityEditorInternal.InternalEditorUtility.HierarchyDropMode;
    static kHierarchyDropBetween: UnityEditorInternal.InternalEditorUtility.HierarchyDropMode;
    static kHierarchyDropAfterParent: UnityEditorInternal.InternalEditorUtility.HierarchyDropMode;
  }
}
