declare namespace UnityEngine {
  class CharacterController extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    SimpleMove(speed: UnityEngine.Vector3): boolean;
    Move(motion: UnityEngine.Vector3): UnityEngine.CollisionFlags;
    // properties
    readonly isGrounded: boolean;
    readonly velocity: UnityEngine.Vector3;
    readonly collisionFlags: UnityEngine.CollisionFlags;
    radius: number;
    height: number;
    center: UnityEngine.Vector3;
    slopeLimit: number;
    stepOffset: number;
    skinWidth: number;
    detectCollisions: boolean;
    enableOverlapRecovery: boolean;
    // fields
  }
}
