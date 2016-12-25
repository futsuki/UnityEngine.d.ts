declare namespace UnityEngine.Rendering {
  class PassType {
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
    static Normal: UnityEngine.Rendering.PassType;
    static Vertex: UnityEngine.Rendering.PassType;
    static VertexLM: UnityEngine.Rendering.PassType;
    static VertexLMRGBM: UnityEngine.Rendering.PassType;
    static ForwardBase: UnityEngine.Rendering.PassType;
    static ForwardAdd: UnityEngine.Rendering.PassType;
    static LightPrePassBase: UnityEngine.Rendering.PassType;
    static LightPrePassFinal: UnityEngine.Rendering.PassType;
    static ShadowCaster: UnityEngine.Rendering.PassType;
    static Deferred: UnityEngine.Rendering.PassType;
    static Meta: UnityEngine.Rendering.PassType;
    static MotionVectors: UnityEngine.Rendering.PassType;
  }
}
