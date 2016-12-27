declare namespace UnityEngine {
  class Collision extends System.Object {
    // constructors
    constructor();
    // methods
    GetEnumerator(): any;
    // properties
    readonly relativeVelocity: UnityEngine.Vector3;
    readonly rigidbody: UnityEngine.Rigidbody;
    readonly collider: UnityEngine.Collider;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    readonly contacts: UnityEngine.ContactPoint[];
    readonly impulse: UnityEngine.Vector3;
    readonly impactForceSum: UnityEngine.Vector3;
    readonly frictionForceSum: UnityEngine.Vector3;
    readonly other: UnityEngine.Component;
    // fields
  }
}
