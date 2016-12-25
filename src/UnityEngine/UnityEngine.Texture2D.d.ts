declare namespace UnityEngine {
  class Texture2D {
    // constructors
    constructor(width: number, height: number);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    static CreateExternalTexture(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean, nativeTex: any): UnityEngine.Texture2D;
    UpdateExternalTexture(nativeTex: any): any;
    SetPixel(x: number, y: number, color: UnityEngine.Color): any;
    GetPixel(x: number, y: number): UnityEngine.Color;
    GetPixelBilinear(u: number, v: number): UnityEngine.Color;
    SetPixels(colors: UnityEngine.Color[]): any;
    SetPixels(colors: UnityEngine.Color[], miplevel: number): any;
    SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[], miplevel: number): any;
    SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[]): any;
    SetPixels32(colors: UnityEngine.Color32[]): any;
    SetPixels32(colors: UnityEngine.Color32[], miplevel: number): any;
    SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[]): any;
    SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[], miplevel: number): any;
    LoadImage(data: number[], markNonReadable: boolean): boolean;
    LoadImage(data: number[]): boolean;
    LoadRawTextureData(data: number[]): any;
    LoadRawTextureData(data: any, size: number): any;
    GetRawTextureData(): number[];
    GetPixels(): UnityEngine.Color[];
    GetPixels(miplevel: number): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number, miplevel: number): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color[];
    GetPixels32(miplevel: number): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): any;
    Apply(updateMipmaps: boolean): any;
    Apply(): any;
    Resize(width: number, height: number, format: UnityEngine.TextureFormat, hasMipMap: boolean): boolean;
    Resize(width: number, height: number): boolean;
    Compress(highQuality: boolean): any;
    PackTextures(textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number, makeNoLongerReadable: boolean): UnityEngine.Rect[];
    PackTextures(textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number): UnityEngine.Rect[];
    PackTextures(textures: UnityEngine.Texture2D[], padding: number): UnityEngine.Rect[];
    ReadPixels(source: UnityEngine.Rect, destX: number, destY: number, recalculateMipMaps: boolean): any;
    ReadPixels(source: UnityEngine.Rect, destX: number, destY: number): any;
    EncodeToPNG(): number[];
    EncodeToJPG(quality: number): number[];
    EncodeToJPG(): number[];
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly mipmapCount: number;
    readonly format: UnityEngine.TextureFormat;
    static readonly whiteTexture: UnityEngine.Texture2D;
    static readonly blackTexture: UnityEngine.Texture2D;
    alphaIsTransparency: boolean;
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
