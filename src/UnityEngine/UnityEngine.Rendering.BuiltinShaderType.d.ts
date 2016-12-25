declare namespace UnityEngine.Rendering {
  class BuiltinShaderType {
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
    static DeferredShading: UnityEngine.Rendering.BuiltinShaderType;
    static DeferredReflections: UnityEngine.Rendering.BuiltinShaderType;
    static LegacyDeferredLighting: UnityEngine.Rendering.BuiltinShaderType;
    static ScreenSpaceShadows: UnityEngine.Rendering.BuiltinShaderType;
    static DepthNormals: UnityEngine.Rendering.BuiltinShaderType;
    static LightHalo: UnityEngine.Rendering.BuiltinShaderType;
    static LensFlare: UnityEngine.Rendering.BuiltinShaderType;
    static Sprite: UnityEngine.Rendering.BuiltinShaderType;
    static MotionVectors: UnityEngine.Rendering.BuiltinShaderType;
  }
}
