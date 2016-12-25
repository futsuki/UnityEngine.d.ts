declare namespace UnityEngine {
  class RenderingPath {
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
    static UsePlayerSettings: UnityEngine.RenderingPath;
    static VertexLit: UnityEngine.RenderingPath;
    static Forward: UnityEngine.RenderingPath;
    static DeferredLighting: UnityEngine.RenderingPath;
    static DeferredShading: UnityEngine.RenderingPath;
  }
}
