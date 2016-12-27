declare namespace UnityEngine {
  class EdgeCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    Reset(): void;
    // properties
    readonly edgeCount: number;
    readonly pointCount: number;
    points: UnityEngine.Vector2[];
    // fields
  }
}
