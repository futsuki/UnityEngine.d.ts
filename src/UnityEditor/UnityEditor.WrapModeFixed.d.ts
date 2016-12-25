declare namespace UnityEditor {
  class WrapModeFixed {
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
    static Default: UnityEditor.WrapModeFixed;
    static Once: UnityEditor.WrapModeFixed;
    static Loop: UnityEditor.WrapModeFixed;
    static ClampForever: UnityEditor.WrapModeFixed;
    static PingPong: UnityEditor.WrapModeFixed;
  }
}
