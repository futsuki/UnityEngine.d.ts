declare namespace UnityEngine {
  class DepthTextureMode {
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
    static None: UnityEngine.DepthTextureMode;
    static Depth: UnityEngine.DepthTextureMode;
    static DepthNormals: UnityEngine.DepthTextureMode;
    static MotionVectors: UnityEngine.DepthTextureMode;
  }
}
