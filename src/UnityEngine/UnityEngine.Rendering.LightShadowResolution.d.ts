declare namespace UnityEngine.Rendering {
  class LightShadowResolution {
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
    static FromQualitySettings: UnityEngine.Rendering.LightShadowResolution;
    static Low: UnityEngine.Rendering.LightShadowResolution;
    static Medium: UnityEngine.Rendering.LightShadowResolution;
    static High: UnityEngine.Rendering.LightShadowResolution;
    static VeryHigh: UnityEngine.Rendering.LightShadowResolution;
  }
}
