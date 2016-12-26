declare namespace UnityEngine {
  class SparseTexture {
    // constructors
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipCount: number);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipCount: number, linear: boolean);
    // methods
    UpdateTile(tileX: number, tileY: number, miplevel: number, data: UnityEngine.Color32[]): void;
    UpdateTileRaw(tileX: number, tileY: number, miplevel: number, data: number[]): void;
    UnloadTile(tileX: number, tileY: number, miplevel: number): void;
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly tileWidth: number;
    readonly tileHeight: number;
    readonly isCreated: boolean;
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
