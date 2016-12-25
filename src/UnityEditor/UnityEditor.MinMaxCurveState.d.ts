declare namespace UnityEditor {
  class MinMaxCurveState {
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
    static k_Scalar: UnityEditor.MinMaxCurveState;
    static k_Curve: UnityEditor.MinMaxCurveState;
    static k_TwoCurves: UnityEditor.MinMaxCurveState;
    static k_TwoScalars: UnityEditor.MinMaxCurveState;
  }
}
