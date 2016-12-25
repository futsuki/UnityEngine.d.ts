declare namespace UnityEngine {
  class Texture2DArray {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): any;
    Apply(updateMipmaps: boolean): any;
    Apply(): any;
    SetPixels(colors: UnityEngine.Color[], arrayElement: number, miplevel: number): any;
    SetPixels(colors: UnityEngine.Color[], arrayElement: number): any;
    SetPixels32(colors: UnityEngine.Color32[], arrayElement: number, miplevel: number): any;
    SetPixels32(colors: UnityEngine.Color32[], arrayElement: number): any;
    GetPixels(arrayElement: number, miplevel: number): UnityEngine.Color[];
    GetPixels(arrayElement: number): UnityEngine.Color[];
    GetPixels32(arrayElement: number, miplevel: number): UnityEngine.Color32[];
    GetPixels32(arrayElement: number): UnityEngine.Color32[];
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly depth: number;
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
