declare namespace UnityEngine {
  class DeviceOrientation {
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
    static Unknown: UnityEngine.DeviceOrientation;
    static Portrait: UnityEngine.DeviceOrientation;
    static PortraitUpsideDown: UnityEngine.DeviceOrientation;
    static LandscapeLeft: UnityEngine.DeviceOrientation;
    static LandscapeRight: UnityEngine.DeviceOrientation;
    static FaceUp: UnityEngine.DeviceOrientation;
    static FaceDown: UnityEngine.DeviceOrientation;
  }
}
