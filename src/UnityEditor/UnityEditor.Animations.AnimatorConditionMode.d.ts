declare namespace UnityEditor.Animations {
  class AnimatorConditionMode {
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
    static If: UnityEditor.Animations.AnimatorConditionMode;
    static IfNot: UnityEditor.Animations.AnimatorConditionMode;
    static Greater: UnityEditor.Animations.AnimatorConditionMode;
    static Less: UnityEditor.Animations.AnimatorConditionMode;
    static Equals: UnityEditor.Animations.AnimatorConditionMode;
    static NotEqual: UnityEditor.Animations.AnimatorConditionMode;
  }
}
