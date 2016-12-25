declare namespace UnityEngine.VR.WSA.Input {
  class GestureSettings {
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
    static None: UnityEngine.VR.WSA.Input.GestureSettings;
    static Tap: UnityEngine.VR.WSA.Input.GestureSettings;
    static DoubleTap: UnityEngine.VR.WSA.Input.GestureSettings;
    static Hold: UnityEngine.VR.WSA.Input.GestureSettings;
    static ManipulationTranslate: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationX: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationY: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationZ: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationRailsX: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationRailsY: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationRailsZ: UnityEngine.VR.WSA.Input.GestureSettings;
  }
}
