declare namespace UnityEngine.VR.WSA {
  class PositionalLocatorState {
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
    static Unavailable: UnityEngine.VR.WSA.PositionalLocatorState;
    static OrientationOnly: UnityEngine.VR.WSA.PositionalLocatorState;
    static Activating: UnityEngine.VR.WSA.PositionalLocatorState;
    static Active: UnityEngine.VR.WSA.PositionalLocatorState;
    static Inhibited: UnityEngine.VR.WSA.PositionalLocatorState;
  }
}
