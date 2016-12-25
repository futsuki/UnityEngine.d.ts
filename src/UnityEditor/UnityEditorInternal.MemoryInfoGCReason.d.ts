declare namespace UnityEditorInternal {
  class MemoryInfoGCReason {
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
    static SceneObject: UnityEditorInternal.MemoryInfoGCReason;
    static BuiltinResource: UnityEditorInternal.MemoryInfoGCReason;
    static MarkedDontSave: UnityEditorInternal.MemoryInfoGCReason;
    static AssetMarkedDirtyInEditor: UnityEditorInternal.MemoryInfoGCReason;
    static SceneAssetReferencedByNativeCodeOnly: UnityEditorInternal.MemoryInfoGCReason;
    static SceneAssetReferenced: UnityEditorInternal.MemoryInfoGCReason;
    static AssetReferencedByNativeCodeOnly: UnityEditorInternal.MemoryInfoGCReason;
    static AssetReferenced: UnityEditorInternal.MemoryInfoGCReason;
    static NotApplicable: UnityEditorInternal.MemoryInfoGCReason;
  }
}
