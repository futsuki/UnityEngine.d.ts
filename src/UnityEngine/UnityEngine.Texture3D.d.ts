declare namespace UnityEngine {
  class Texture3D extends UnityEngine.Texture {
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
    // properties
    readonly depth: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
