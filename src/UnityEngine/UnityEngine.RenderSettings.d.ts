declare namespace UnityEngine {
  class RenderSettings {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    static fog: boolean;
    static fogMode: UnityEngine.FogMode;
    static fogColor: UnityEngine.Color;
    static fogDensity: number;
    static fogStartDistance: number;
    static fogEndDistance: number;
    static ambientMode: UnityEngine.Rendering.AmbientMode;
    static ambientSkyColor: UnityEngine.Color;
    static ambientEquatorColor: UnityEngine.Color;
    static ambientGroundColor: UnityEngine.Color;
    static ambientLight: UnityEngine.Color;
    static ambientIntensity: number;
    static ambientProbe: UnityEngine.Rendering.SphericalHarmonicsL2;
    static reflectionIntensity: number;
    static reflectionBounces: number;
    static haloStrength: number;
    static flareStrength: number;
    static flareFadeSpeed: number;
    static skybox: UnityEngine.Material;
    static sun: UnityEngine.Light;
    static defaultReflectionMode: UnityEngine.Rendering.DefaultReflectionMode;
    static defaultReflectionResolution: number;
    static customReflection: UnityEngine.Cubemap;
    static ambientSkyboxAmount: number;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
