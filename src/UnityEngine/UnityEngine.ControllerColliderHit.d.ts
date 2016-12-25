declare namespace UnityEngine {
  class ControllerColliderHit {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly controller: UnityEngine.CharacterController;
    readonly collider: UnityEngine.Collider;
    readonly rigidbody: UnityEngine.Rigidbody;
    readonly gameObject: UnityEngine.GameObject;
    readonly transform: UnityEngine.Transform;
    readonly point: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly moveDirection: UnityEngine.Vector3;
    readonly moveLength: number;
    // fields
  }
}
