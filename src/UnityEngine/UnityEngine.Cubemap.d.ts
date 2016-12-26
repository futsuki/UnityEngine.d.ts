declare namespace UnityEngine {
  class Cubemap {
    // constructors
    constructor(size: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    // methods
    SetPixel(face: UnityEngine.CubemapFace, x: number, y: number, color: UnityEngine.Color): void;
    GetPixel(face: UnityEngine.CubemapFace, x: number, y: number): UnityEngine.Color;
    GetPixels(face: UnityEngine.CubemapFace, miplevel: number): UnityEngine.Color[];
    GetPixels(face: UnityEngine.CubemapFace): UnityEngine.Color[];
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace): void;
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    SmoothEdges(smoothRegionWidthInPixels: number): void;
    SmoothEdges(): void;
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
