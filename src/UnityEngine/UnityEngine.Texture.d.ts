declare namespace UnityEngine {
  class Texture {
    // constructors
    constructor();
    // methods
    static SetGlobalAnisotropicFilteringLimits(forcedMin: number, globalMax: number): void;
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    static masterTextureLimit: number;
    static anisotropicFiltering: UnityEngine.AnisotropicFiltering;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    wrapMode: UnityEngine.TextureWrapMode;
    mipMapBias: number;
    readonly texelSize: UnityEngine.Vector2;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
