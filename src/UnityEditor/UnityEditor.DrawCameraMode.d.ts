declare namespace UnityEditor {
  class DrawCameraMode {
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
    static Normal: UnityEditor.DrawCameraMode;
    static Textured: UnityEditor.DrawCameraMode;
    static Wireframe: UnityEditor.DrawCameraMode;
    static TexturedWire: UnityEditor.DrawCameraMode;
    static ShadowCascades: UnityEditor.DrawCameraMode;
    static RenderPaths: UnityEditor.DrawCameraMode;
    static AlphaChannel: UnityEditor.DrawCameraMode;
    static Overdraw: UnityEditor.DrawCameraMode;
    static Mipmaps: UnityEditor.DrawCameraMode;
    static DeferredDiffuse: UnityEditor.DrawCameraMode;
    static DeferredSpecular: UnityEditor.DrawCameraMode;
    static DeferredSmoothness: UnityEditor.DrawCameraMode;
    static DeferredNormal: UnityEditor.DrawCameraMode;
    static Charting: UnityEditor.DrawCameraMode;
    static Systems: UnityEditor.DrawCameraMode;
    static Albedo: UnityEditor.DrawCameraMode;
    static Emissive: UnityEditor.DrawCameraMode;
    static Irradiance: UnityEditor.DrawCameraMode;
    static Directionality: UnityEditor.DrawCameraMode;
    static Baked: UnityEditor.DrawCameraMode;
    static Clustering: UnityEditor.DrawCameraMode;
    static LitClustering: UnityEditor.DrawCameraMode;
  }
}
