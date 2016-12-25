declare namespace UnityEngine {
  class LightmapsMode {
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
    static NonDirectional: UnityEngine.LightmapsMode;
    static CombinedDirectional: UnityEngine.LightmapsMode;
    static SeparateDirectional: UnityEngine.LightmapsMode;
    static Single: UnityEngine.LightmapsMode;
    static Dual: UnityEngine.LightmapsMode;
    static Directional: UnityEngine.LightmapsMode;
  }
}
