declare namespace UnityEngine {
  class SparseTexture extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipCount: number);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipCount: number, linear: boolean);
    // methods
    UpdateTile(tileX: number, tileY: number, miplevel: number, data: UnityEngine.Color32[]): void;
    UpdateTileRaw(tileX: number, tileY: number, miplevel: number, data: number[]): void;
    UnloadTile(tileX: number, tileY: number, miplevel: number): void;
    // properties
    readonly tileWidth: number;
    readonly tileHeight: number;
    readonly isCreated: boolean;
    // fields
  }
}
