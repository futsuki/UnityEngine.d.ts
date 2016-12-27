declare namespace UnityEngine {
  class Rigidbody2D extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    MovePosition(position: UnityEngine.Vector2): void;
    MoveRotation(angle: number): void;
    IsSleeping(): boolean;
    IsAwake(): boolean;
    Sleep(): void;
    WakeUp(): void;
    IsTouching(collider: UnityEngine.Collider2D): boolean;
    IsTouchingLayers(layerMask: number): boolean;
    IsTouchingLayers(): boolean;
    OverlapPoint(point: UnityEngine.Vector2): boolean;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    AddForce(force: UnityEngine.Vector2, mode: UnityEngine.ForceMode2D): void;
    AddForce(force: UnityEngine.Vector2): void;
    AddRelativeForce(relativeForce: UnityEngine.Vector2, mode: UnityEngine.ForceMode2D): void;
    AddRelativeForce(relativeForce: UnityEngine.Vector2): void;
    AddForceAtPosition(force: UnityEngine.Vector2, position: UnityEngine.Vector2, mode: UnityEngine.ForceMode2D): void;
    AddForceAtPosition(force: UnityEngine.Vector2, position: UnityEngine.Vector2): void;
    AddTorque(torque: number, mode: UnityEngine.ForceMode2D): void;
    AddTorque(torque: number): void;
    GetPoint(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetRelativePoint(relativePoint: UnityEngine.Vector2): UnityEngine.Vector2;
    GetVector(vector: UnityEngine.Vector2): UnityEngine.Vector2;
    GetRelativeVector(relativeVector: UnityEngine.Vector2): UnityEngine.Vector2;
    GetPointVelocity(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetRelativePointVelocity(relativePoint: UnityEngine.Vector2): UnityEngine.Vector2;
    // properties
    position: UnityEngine.Vector2;
    rotation: number;
    velocity: UnityEngine.Vector2;
    angularVelocity: number;
    useAutoMass: boolean;
    mass: number;
    sharedMaterial: UnityEngine.PhysicsMaterial2D;
    centerOfMass: UnityEngine.Vector2;
    readonly worldCenterOfMass: UnityEngine.Vector2;
    inertia: number;
    drag: number;
    angularDrag: number;
    gravityScale: number;
    bodyType: UnityEngine.RigidbodyType2D;
    useFullKinematicContacts: boolean;
    isKinematic: boolean;
    fixedAngle: boolean;
    freezeRotation: boolean;
    constraints: UnityEngine.RigidbodyConstraints2D;
    simulated: boolean;
    interpolation: UnityEngine.RigidbodyInterpolation2D;
    sleepMode: UnityEngine.RigidbodySleepMode2D;
    collisionDetectionMode: UnityEngine.CollisionDetectionMode2D;
    // fields
  }
}
