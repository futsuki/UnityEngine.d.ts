declare namespace UnityEngine {
  class LightType {
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
    static Spot: UnityEngine.LightType;
    static Directional: UnityEngine.LightType;
    static Point: UnityEngine.LightType;
    static Area: UnityEngine.LightType;
  }
}
