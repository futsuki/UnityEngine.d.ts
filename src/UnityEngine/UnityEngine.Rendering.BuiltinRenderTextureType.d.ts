declare namespace UnityEngine.Rendering {
  class BuiltinRenderTextureType {
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
    static BindableTexture: UnityEngine.Rendering.BuiltinRenderTextureType;
    static None: UnityEngine.Rendering.BuiltinRenderTextureType;
    static CurrentActive: UnityEngine.Rendering.BuiltinRenderTextureType;
    static CameraTarget: UnityEngine.Rendering.BuiltinRenderTextureType;
    static Depth: UnityEngine.Rendering.BuiltinRenderTextureType;
    static DepthNormals: UnityEngine.Rendering.BuiltinRenderTextureType;
    static ResolvedDepth: UnityEngine.Rendering.BuiltinRenderTextureType;
    static PrepassNormalsSpec: UnityEngine.Rendering.BuiltinRenderTextureType;
    static PrepassLight: UnityEngine.Rendering.BuiltinRenderTextureType;
    static PrepassLightSpec: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer0: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer1: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer2: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer3: UnityEngine.Rendering.BuiltinRenderTextureType;
    static Reflections: UnityEngine.Rendering.BuiltinRenderTextureType;
  }
}
