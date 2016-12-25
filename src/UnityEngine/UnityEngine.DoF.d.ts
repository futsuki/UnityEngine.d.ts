declare namespace UnityEngine {
  class DoF {
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
    static BodyDoFStart: UnityEngine.DoF;
    static HeadDoFStart: UnityEngine.DoF;
    static LeftLegDoFStart: UnityEngine.DoF;
    static RightLegDoFStart: UnityEngine.DoF;
    static LeftArmDoFStart: UnityEngine.DoF;
    static RightArmDoFStart: UnityEngine.DoF;
    static LeftThumbDoFStart: UnityEngine.DoF;
    static LeftIndexDoFStart: UnityEngine.DoF;
    static LeftMiddleDoFStart: UnityEngine.DoF;
    static LeftRingDoFStart: UnityEngine.DoF;
    static LeftLittleDoFStart: UnityEngine.DoF;
    static RightThumbDoFStart: UnityEngine.DoF;
    static RightIndexDoFStart: UnityEngine.DoF;
    static RightMiddleDoFStart: UnityEngine.DoF;
    static RightRingDoFStart: UnityEngine.DoF;
    static RightLittleDoFStart: UnityEngine.DoF;
    static LastDoF: UnityEngine.DoF;
  }
}
