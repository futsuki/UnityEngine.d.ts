declare namespace UnityEditor.RotationCurveInterpolation {
  class Mode {
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
    static Baked: UnityEditor.RotationCurveInterpolation.Mode;
    static NonBaked: UnityEditor.RotationCurveInterpolation.Mode;
    static RawQuaternions: UnityEditor.RotationCurveInterpolation.Mode;
    static RawEuler: UnityEditor.RotationCurveInterpolation.Mode;
    static Undefined: UnityEditor.RotationCurveInterpolation.Mode;
  }
}
