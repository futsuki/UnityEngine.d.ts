declare namespace UnityEngineInternal {
  class LightmapType {
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
    static NoLightmap: UnityEngineInternal.LightmapType;
    static StaticLightmap: UnityEngineInternal.LightmapType;
    static DynamicLightmap: UnityEngineInternal.LightmapType;
  }
}
