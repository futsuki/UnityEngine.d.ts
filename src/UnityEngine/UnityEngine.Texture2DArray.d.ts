declare namespace UnityEngine {
  class Texture2DArray extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    SetPixels(colors: UnityEngine.Color[], arrayElement: number, miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[], arrayElement: number): void;
    SetPixels32(colors: UnityEngine.Color32[], arrayElement: number, miplevel: number): void;
    SetPixels32(colors: UnityEngine.Color32[], arrayElement: number): void;
    GetPixels(arrayElement: number, miplevel: number): UnityEngine.Color[];
    GetPixels(arrayElement: number): UnityEngine.Color[];
    GetPixels32(arrayElement: number, miplevel: number): UnityEngine.Color32[];
    GetPixels32(arrayElement: number): UnityEngine.Color32[];
    // properties
    readonly depth: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
