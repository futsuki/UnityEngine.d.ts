declare namespace UnityEngine {
  class PolygonCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    GetPath(index: number): UnityEngine.Vector2[];
    SetPath(index: number, points: UnityEngine.Vector2[]): void;
    GetTotalPointCount(): number;
    CreatePrimitive(sides: number, scale: UnityEngine.Vector2, offset: UnityEngine.Vector2): void;
    CreatePrimitive(sides: number, scale: UnityEngine.Vector2): void;
    CreatePrimitive(sides: number): void;
    // properties
    points: UnityEngine.Vector2[];
    pathCount: number;
    // fields
  }
}
