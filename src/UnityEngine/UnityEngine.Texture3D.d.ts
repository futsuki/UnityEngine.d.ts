declare namespace UnityEngine {
  class Texture3D {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    // methods
    GetPixels(miplevel: number): UnityEngine.Color[];
    GetPixels(): UnityEngine.Color[];
    GetPixels32(miplevel: number): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    SetPixels(colors: UnityEngine.Color[], miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[]): void;
    SetPixels32(colors: UnityEngine.Color32[], miplevel: number): void;
    SetPixels32(colors: UnityEngine.Color32[]): void;
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
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
