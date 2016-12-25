declare namespace UnityEngine {
  class iPhoneScreenOrientation {
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
    static Unknown: UnityEngine.iPhoneScreenOrientation;
    static Portrait: UnityEngine.iPhoneScreenOrientation;
    static PortraitUpsideDown: UnityEngine.iPhoneScreenOrientation;
    static LandscapeLeft: UnityEngine.iPhoneScreenOrientation;
    static LandscapeRight: UnityEngine.iPhoneScreenOrientation;
    static AutoRotation: UnityEngine.iPhoneScreenOrientation;
    static Landscape: UnityEngine.iPhoneScreenOrientation;
  }
}
