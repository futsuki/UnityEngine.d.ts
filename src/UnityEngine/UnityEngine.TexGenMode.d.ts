declare namespace UnityEngine {
  class TexGenMode {
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
    static None: UnityEngine.TexGenMode;
    static SphereMap: UnityEngine.TexGenMode;
    static Object: UnityEngine.TexGenMode;
    static EyeLinear: UnityEngine.TexGenMode;
    static CubeReflect: UnityEngine.TexGenMode;
    static CubeNormal: UnityEngine.TexGenMode;
  }
}
