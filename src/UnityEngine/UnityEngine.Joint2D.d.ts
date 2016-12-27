declare namespace UnityEngine {
  class Joint2D extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    GetReactionForce(timeStep: number): UnityEngine.Vector2;
    GetReactionTorque(timeStep: number): number;
    // properties
    collideConnected: boolean;
    connectedBody: UnityEngine.Rigidbody2D;
    enableCollision: boolean;
    breakForce: number;
    breakTorque: number;
    readonly reactionForce: UnityEngine.Vector2;
    readonly reactionTorque: number;
    // fields
  }
}
