declare namespace UnityEngine {
  class Cubemap {
    // constructors
    constructor(size: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    // methods
    SetPixel(face: UnityEngine.CubemapFace, x: number, y: number, color: UnityEngine.Color): any;
    GetPixel(face: UnityEngine.CubemapFace, x: number, y: number): UnityEngine.Color;
    GetPixels(face: UnityEngine.CubemapFace, miplevel: number): UnityEngine.Color[];
    GetPixels(face: UnityEngine.CubemapFace): UnityEngine.Color[];
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, miplevel: number): any;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace): any;
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): any;
    Apply(updateMipmaps: boolean): any;
    Apply(): any;
    SmoothEdges(smoothRegionWidthInPixels: number): any;
    SmoothEdges(): any;
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
