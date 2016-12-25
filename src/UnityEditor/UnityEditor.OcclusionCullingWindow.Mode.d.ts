declare namespace UnityEditor.OcclusionCullingWindow {
  class Mode {
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
    static AreaSettings: UnityEditor.OcclusionCullingWindow.Mode;
    static BakeSettings: UnityEditor.OcclusionCullingWindow.Mode;
    static Visualization: UnityEditor.OcclusionCullingWindow.Mode;
  }
}
