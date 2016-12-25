declare namespace UnityEngine {
  class ProceduralOutputType {
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
    static Unknown: UnityEngine.ProceduralOutputType;
    static Diffuse: UnityEngine.ProceduralOutputType;
    static Normal: UnityEngine.ProceduralOutputType;
    static Height: UnityEngine.ProceduralOutputType;
    static Emissive: UnityEngine.ProceduralOutputType;
    static Specular: UnityEngine.ProceduralOutputType;
    static Opacity: UnityEngine.ProceduralOutputType;
    static Smoothness: UnityEngine.ProceduralOutputType;
    static AmbientOcclusion: UnityEngine.ProceduralOutputType;
    static DetailMask: UnityEngine.ProceduralOutputType;
    static Metallic: UnityEngine.ProceduralOutputType;
    static Roughness: UnityEngine.ProceduralOutputType;
  }
}
