declare namespace UnityEngine {
  class JointLimitState2D {
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
    static Inactive: UnityEngine.JointLimitState2D;
    static LowerLimit: UnityEngine.JointLimitState2D;
    static UpperLimit: UnityEngine.JointLimitState2D;
    static EqualLimits: UnityEngine.JointLimitState2D;
  }
}
