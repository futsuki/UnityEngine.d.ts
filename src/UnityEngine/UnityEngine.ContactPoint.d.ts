declare namespace UnityEngine {
  class ContactPoint extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly point: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly thisCollider: UnityEngine.Collider;
    readonly otherCollider: UnityEngine.Collider;
    readonly separation: number;
    // fields
  }
}
