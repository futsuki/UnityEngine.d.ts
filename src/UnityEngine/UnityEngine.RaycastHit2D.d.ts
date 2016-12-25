declare namespace UnityEngine {
  class RaycastHit2D {
    // constructors
    private constructor();
    // methods
    CompareTo(other: UnityEngine.RaycastHit2D): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    centroid: UnityEngine.Vector2;
    point: UnityEngine.Vector2;
    normal: UnityEngine.Vector2;
    distance: number;
    fraction: number;
    readonly collider: UnityEngine.Collider2D;
    readonly rigidbody: UnityEngine.Rigidbody2D;
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
