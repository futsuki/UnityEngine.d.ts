declare namespace UnityEngine {
  class Texture extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static SetGlobalAnisotropicFilteringLimits(forcedMin: number, globalMax: number): void;
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
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
    // fields
  }
}
