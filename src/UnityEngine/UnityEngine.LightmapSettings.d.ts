declare namespace UnityEngine {
  class LightmapSettings {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    static lightmaps: UnityEngine.LightmapData[];
    static lightmapsModeLegacy: UnityEngine.LightmapsModeLegacy;
    static lightmapsMode: UnityEngine.LightmapsMode;
    static bakedColorSpace: UnityEngine.ColorSpace;
    static lightProbes: UnityEngine.LightProbes;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
