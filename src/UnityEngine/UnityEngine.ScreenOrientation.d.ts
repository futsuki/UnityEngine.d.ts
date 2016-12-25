declare namespace UnityEngine {
  class ScreenOrientation {
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
    static Unknown: UnityEngine.ScreenOrientation;
    static Portrait: UnityEngine.ScreenOrientation;
    static PortraitUpsideDown: UnityEngine.ScreenOrientation;
    static LandscapeLeft: UnityEngine.ScreenOrientation;
    static LandscapeRight: UnityEngine.ScreenOrientation;
    static AutoRotation: UnityEngine.ScreenOrientation;
    static Landscape: UnityEngine.ScreenOrientation;
  }
}
