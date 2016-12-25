declare namespace UnityEngine {
  class WrapMode {
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
    static Once: UnityEngine.WrapMode;
    static Loop: UnityEngine.WrapMode;
    static PingPong: UnityEngine.WrapMode;
    static Default: UnityEngine.WrapMode;
    static ClampForever: UnityEngine.WrapMode;
    static Clamp: UnityEngine.WrapMode;
  }
}
