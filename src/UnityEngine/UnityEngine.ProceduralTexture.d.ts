declare namespace UnityEngine {
  class ProceduralTexture {
    // constructors
    constructor();
    // methods
    GetProceduralOutputType(): UnityEngine.ProceduralOutputType;
    GetPixels32(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color32[];
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly hasAlpha: boolean;
    readonly format: UnityEngine.TextureFormat;
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
