declare namespace UnityEngine {
  class FogMode {
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
    static Linear: UnityEngine.FogMode;
    static Exponential: UnityEngine.FogMode;
    static ExponentialSquared: UnityEngine.FogMode;
  }
}
