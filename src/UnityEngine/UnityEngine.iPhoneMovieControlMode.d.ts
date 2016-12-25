declare namespace UnityEngine {
  class iPhoneMovieControlMode {
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
    static Full: UnityEngine.iPhoneMovieControlMode;
    static Minimal: UnityEngine.iPhoneMovieControlMode;
    static CancelOnTouch: UnityEngine.iPhoneMovieControlMode;
    static Hidden: UnityEngine.iPhoneMovieControlMode;
    static VolumeOnly: UnityEngine.iPhoneMovieControlMode;
  }
}
