declare namespace UnityEngine {
  class ContactPoint {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly point: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly thisCollider: UnityEngine.Collider;
    readonly otherCollider: UnityEngine.Collider;
    readonly separation: number;
    // fields
  }
}
