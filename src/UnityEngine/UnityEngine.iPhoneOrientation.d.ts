declare namespace UnityEngine {
  class iPhoneOrientation {
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
    static Unknown: UnityEngine.iPhoneOrientation;
    static Portrait: UnityEngine.iPhoneOrientation;
    static PortraitUpsideDown: UnityEngine.iPhoneOrientation;
    static LandscapeLeft: UnityEngine.iPhoneOrientation;
    static LandscapeRight: UnityEngine.iPhoneOrientation;
    static FaceUp: UnityEngine.iPhoneOrientation;
    static FaceDown: UnityEngine.iPhoneOrientation;
  }
}
