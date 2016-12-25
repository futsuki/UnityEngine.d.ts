declare namespace UnityEngineInternal {
  class GITextureType {
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
    static Charting: UnityEngineInternal.GITextureType;
    static Albedo: UnityEngineInternal.GITextureType;
    static Emissive: UnityEngineInternal.GITextureType;
    static Irradiance: UnityEngineInternal.GITextureType;
    static Directionality: UnityEngineInternal.GITextureType;
    static Baked: UnityEngineInternal.GITextureType;
    static BakedDirectional: UnityEngineInternal.GITextureType;
    static InputWorkspace: UnityEngineInternal.GITextureType;
  }
}
