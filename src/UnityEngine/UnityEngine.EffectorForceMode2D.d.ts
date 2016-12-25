declare namespace UnityEngine {
  class EffectorForceMode2D {
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
    static Constant: UnityEngine.EffectorForceMode2D;
    static InverseLinear: UnityEngine.EffectorForceMode2D;
    static InverseSquared: UnityEngine.EffectorForceMode2D;
  }
}
