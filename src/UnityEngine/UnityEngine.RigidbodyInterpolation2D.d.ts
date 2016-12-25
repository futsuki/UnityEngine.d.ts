declare namespace UnityEngine {
  class RigidbodyInterpolation2D {
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
    static None: UnityEngine.RigidbodyInterpolation2D;
    static Interpolate: UnityEngine.RigidbodyInterpolation2D;
    static Extrapolate: UnityEngine.RigidbodyInterpolation2D;
  }
}
