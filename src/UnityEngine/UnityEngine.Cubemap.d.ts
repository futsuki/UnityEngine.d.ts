declare namespace UnityEngine {
  class Cubemap extends UnityEngine.Texture {
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
    // properties
    readonly mipmapCount: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
