declare namespace UnityEditor.Audio {
  class ParameterTransitionType {
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
    static Lerp: UnityEditor.Audio.ParameterTransitionType;
    static Smoothstep: UnityEditor.Audio.ParameterTransitionType;
    static Squared: UnityEditor.Audio.ParameterTransitionType;
    static SquareRoot: UnityEditor.Audio.ParameterTransitionType;
    static BrickwallStart: UnityEditor.Audio.ParameterTransitionType;
    static BrickwallEnd: UnityEditor.Audio.ParameterTransitionType;
  }
}
