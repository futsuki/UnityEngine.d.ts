declare namespace UnityEngine {
  class Sprite extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number, extrude: number, meshType: UnityEngine.SpriteMeshType, border: UnityEngine.Vector4): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number, extrude: number, meshType: UnityEngine.SpriteMeshType): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number, extrude: number): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2): UnityEngine.Sprite;
    OverrideGeometry(vertices: UnityEngine.Vector2[], triangles: number[]): void;
    // properties
    readonly bounds: UnityEngine.Bounds;
    readonly rect: UnityEngine.Rect;
    readonly pixelsPerUnit: number;
    readonly texture: UnityEngine.Texture2D;
    readonly associatedAlphaSplitTexture: UnityEngine.Texture2D;
    readonly textureRect: UnityEngine.Rect;
    readonly textureRectOffset: UnityEngine.Vector2;
    readonly packed: boolean;
    readonly packingMode: UnityEngine.SpritePackingMode;
    readonly packingRotation: UnityEngine.SpritePackingRotation;
    readonly pivot: UnityEngine.Vector2;
    readonly border: UnityEngine.Vector4;
    readonly vertices: UnityEngine.Vector2[];
    readonly triangles: number[];
    readonly uv: UnityEngine.Vector2[];
    // fields
  }
}
