declare namespace UnityEngine {
  class HumanParameter {
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
    static UpperArmTwist: UnityEngine.HumanParameter;
    static LowerArmTwist: UnityEngine.HumanParameter;
    static UpperLegTwist: UnityEngine.HumanParameter;
    static LowerLegTwist: UnityEngine.HumanParameter;
    static ArmStretch: UnityEngine.HumanParameter;
    static LegStretch: UnityEngine.HumanParameter;
    static FeetSpacing: UnityEngine.HumanParameter;
  }
}
