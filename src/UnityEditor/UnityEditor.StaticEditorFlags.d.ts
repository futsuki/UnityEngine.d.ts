declare namespace UnityEditor {
  class StaticEditorFlags {
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
    static LightmapStatic: UnityEditor.StaticEditorFlags;
    static OccluderStatic: UnityEditor.StaticEditorFlags;
    static OccludeeStatic: UnityEditor.StaticEditorFlags;
    static BatchingStatic: UnityEditor.StaticEditorFlags;
    static NavigationStatic: UnityEditor.StaticEditorFlags;
    static OffMeshLinkGeneration: UnityEditor.StaticEditorFlags;
    static ReflectionProbeStatic: UnityEditor.StaticEditorFlags;
  }
}
