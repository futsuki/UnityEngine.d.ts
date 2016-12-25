declare namespace UnityEditor.AnimationUtility {
  class TangentMode {
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
    static Free: UnityEditor.AnimationUtility.TangentMode;
    static Auto: UnityEditor.AnimationUtility.TangentMode;
    static Linear: UnityEditor.AnimationUtility.TangentMode;
    static Constant: UnityEditor.AnimationUtility.TangentMode;
    static ClampedAuto: UnityEditor.AnimationUtility.TangentMode;
  }
}
