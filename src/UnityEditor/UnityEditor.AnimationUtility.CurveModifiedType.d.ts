declare namespace UnityEditor.AnimationUtility {
  class CurveModifiedType {
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
    static CurveDeleted: UnityEditor.AnimationUtility.CurveModifiedType;
    static CurveModified: UnityEditor.AnimationUtility.CurveModifiedType;
    static ClipModified: UnityEditor.AnimationUtility.CurveModifiedType;
  }
}
