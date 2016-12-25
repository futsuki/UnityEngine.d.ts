declare namespace UnityEngine {
  class ContactPoint2D {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly point: UnityEngine.Vector2;
    readonly normal: UnityEngine.Vector2;
    readonly collider: UnityEngine.Collider2D;
    readonly otherCollider: UnityEngine.Collider2D;
    // fields
  }
}
