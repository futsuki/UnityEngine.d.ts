declare namespace UnityEditor {
  class LightmapEditorSettings {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static maxAtlasWidth: number;
    static maxAtlasHeight: number;
    static realtimeResolution: number;
    static bakeResolution: number;
    static textureCompression: boolean;
    static reflectionCubemapCompression: any;
    static aoMaxDistance: number;
    static padding: number;
    static aoContrast: number;
    static aoAmount: number;
    static lockAtlas: boolean;
    static skyLightColor: any;
    static skyLightIntensity: number;
    static quality: UnityEditor.LightmapBakeQuality;
    static bounceBoost: number;
    static finalGatherRays: number;
    static finalGatherContrastThreshold: number;
    static finalGatherGradientThreshold: number;
    static finalGatherInterpolationPoints: number;
    static lastUsedResolution: number;
    static bounces: number;
    static bounceIntensity: number;
    static resolution: number;
    // fields
  }
}
