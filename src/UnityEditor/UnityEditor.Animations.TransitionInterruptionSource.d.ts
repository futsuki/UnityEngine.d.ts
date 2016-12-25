declare namespace UnityEditor.Animations {
  class TransitionInterruptionSource {
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
    static None: UnityEditor.Animations.TransitionInterruptionSource;
    static Source: UnityEditor.Animations.TransitionInterruptionSource;
    static Destination: UnityEditor.Animations.TransitionInterruptionSource;
    static SourceThenDestination: UnityEditor.Animations.TransitionInterruptionSource;
    static DestinationThenSource: UnityEditor.Animations.TransitionInterruptionSource;
  }
}
