declare namespace UnityEngine {
  class Texture2D {
    // constructors
    constructor(width: number, height: number);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    static CreateExternalTexture(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean, nativeTex: any): UnityEngine.Texture2D;
    UpdateExternalTexture(nativeTex: any): void;
    SetPixel(x: number, y: number, color: UnityEngine.Color): void;
    GetPixel(x: number, y: number): UnityEngine.Color;
    GetPixelBilinear(u: number, v: number): UnityEngine.Color;
    SetPixels(colors: UnityEngine.Color[]): void;
    SetPixels(colors: UnityEngine.Color[], miplevel: number): void;
    SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[], miplevel: number): void;
    SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[]): void;
    SetPixels32(colors: UnityEngine.Color32[]): void;
    SetPixels32(colors: UnityEngine.Color32[], miplevel: number): void;
    SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[]): void;
    SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[], miplevel: number): void;
    LoadImage(data: number[], markNonReadable: boolean): boolean;
    LoadImage(data: number[]): boolean;
    LoadRawTextureData(data: number[]): void;
    LoadRawTextureData(data: any, size: number): void;
    GetRawTextureData(): number[];
    GetPixels(): UnityEngine.Color[];
    GetPixels(miplevel: number): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number, miplevel: number): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color[];
    GetPixels32(miplevel: number): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    Resize(width: number, height: number, format: UnityEngine.TextureFormat, hasMipMap: boolean): boolean;
    Resize(width: number, height: number): boolean;
    Compress(highQuality: boolean): void;
    PackTextures(textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number, makeNoLongerReadable: boolean): UnityEngine.Rect[];
    PackTextures(textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number): UnityEngine.Rect[];
    PackTextures(textures: UnityEngine.Texture2D[], padding: number): UnityEngine.Rect[];
    ReadPixels(source: UnityEngine.Rect, destX: number, destY: number, recalculateMipMaps: boolean): void;
    ReadPixels(source: UnityEngine.Rect, destX: number, destY: number): void;
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
