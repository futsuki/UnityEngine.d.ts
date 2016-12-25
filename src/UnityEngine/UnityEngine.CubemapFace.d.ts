declare namespace UnityEngine {
  class CubemapFace {
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
    static Unknown: UnityEngine.CubemapFace;
    static PositiveX: UnityEngine.CubemapFace;
    static NegativeX: UnityEngine.CubemapFace;
    static PositiveY: UnityEngine.CubemapFace;
    static NegativeY: UnityEngine.CubemapFace;
    static PositiveZ: UnityEngine.CubemapFace;
    static NegativeZ: UnityEngine.CubemapFace;
  }
}
