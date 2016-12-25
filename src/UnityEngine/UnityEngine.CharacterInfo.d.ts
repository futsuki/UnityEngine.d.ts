declare namespace UnityEngine {
  class CharacterInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    advance: number;
    glyphWidth: number;
    glyphHeight: number;
    bearing: number;
    minY: number;
    maxY: number;
    minX: number;
    maxX: number;
    uvBottomLeft: UnityEngine.Vector2;
    uvBottomRight: UnityEngine.Vector2;
    uvTopRight: UnityEngine.Vector2;
    uvTopLeft: UnityEngine.Vector2;
    // fields
    index: number;
    uv: UnityEngine.Rect;
    vert: UnityEngine.Rect;
    width: number;
    size: number;
    style: UnityEngine.FontStyle;
    flipped: boolean;
  }
}
