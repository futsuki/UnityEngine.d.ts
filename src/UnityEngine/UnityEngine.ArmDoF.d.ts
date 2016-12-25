declare namespace UnityEngine {
  class ArmDoF {
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
    static ShoulderDownUp: UnityEngine.ArmDoF;
    static ShoulderFrontBack: UnityEngine.ArmDoF;
    static ArmDownUp: UnityEngine.ArmDoF;
    static ArmFrontBack: UnityEngine.ArmDoF;
    static ArmRollInOut: UnityEngine.ArmDoF;
    static ForeArmCloseOpen: UnityEngine.ArmDoF;
    static ForeArmRollInOut: UnityEngine.ArmDoF;
    static HandDownUp: UnityEngine.ArmDoF;
    static HandInOut: UnityEngine.ArmDoF;
    static LastArmDoF: UnityEngine.ArmDoF;
  }
}
