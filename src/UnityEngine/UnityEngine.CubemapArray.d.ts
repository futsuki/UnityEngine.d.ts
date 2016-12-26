declare namespace UnityEngine {
  class CubemapArray {
    // constructors
    constructor(faceSize: number, cubemapCount: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(faceSize: number, cubemapCount: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, arrayElement: number): void;
    SetPixels32(colors: UnityEngine.Color32[], face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): void;
    SetPixels32(colors: UnityEngine.Color32[], face: UnityEngine.CubemapFace, arrayElement: number): void;
    GetPixels(face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): UnityEngine.Color[];
    GetPixels(face: UnityEngine.CubemapFace, arrayElement: number): UnityEngine.Color[];
    GetPixels32(face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): UnityEngine.Color32[];
    GetPixels32(face: UnityEngine.CubemapFace, arrayElement: number): UnityEngine.Color32[];
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly cubemapCount: number;
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
