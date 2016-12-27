declare namespace UnityEngine {
  class Rigidbody extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetDensity(density: number): void;
    AddForce(force: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddForce(force: UnityEngine.Vector3): void;
    AddForce(x: number, y: number, z: number): void;
    AddForce(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddRelativeForce(force: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddRelativeForce(force: UnityEngine.Vector3): void;
    AddRelativeForce(x: number, y: number, z: number): void;
    AddRelativeForce(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddTorque(torque: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddTorque(torque: UnityEngine.Vector3): void;
    AddTorque(x: number, y: number, z: number): void;
    AddTorque(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddRelativeTorque(torque: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddRelativeTorque(torque: UnityEngine.Vector3): void;
    AddRelativeTorque(x: number, y: number, z: number): void;
    AddRelativeTorque(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddForceAtPosition(force: UnityEngine.Vector3, position: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddForceAtPosition(force: UnityEngine.Vector3, position: UnityEngine.Vector3): void;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number, upwardsModifier: number, mode: UnityEngine.ForceMode): void;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number, upwardsModifier: number): void;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number): void;
    ClosestPointOnBounds(position: UnityEngine.Vector3): UnityEngine.Vector3;
    GetRelativePointVelocity(relativePoint: UnityEngine.Vector3): UnityEngine.Vector3;
    GetPointVelocity(worldPoint: UnityEngine.Vector3): UnityEngine.Vector3;
    MovePosition(position: UnityEngine.Vector3): void;
    MoveRotation(rot: UnityEngine.Quaternion): void;
    Sleep(): void;
    IsSleeping(): boolean;
    WakeUp(): void;
    ResetCenterOfMass(): void;
    ResetInertiaTensor(): void;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number): boolean;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any): boolean;
    SweepTestAll(direction: UnityEngine.Vector3, maxDistance: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    SweepTestAll(direction: UnityEngine.Vector3, maxDistance: number): UnityEngine.RaycastHit[];
    SweepTestAll(direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    SetMaxAngularVelocity(a: number): void;
    // properties
    velocity: UnityEngine.Vector3;
    angularVelocity: UnityEngine.Vector3;
    drag: number;
    angularDrag: number;
    mass: number;
    useGravity: boolean;
    maxDepenetrationVelocity: number;
    isKinematic: boolean;
    freezeRotation: boolean;
    constraints: UnityEngine.RigidbodyConstraints;
    collisionDetectionMode: UnityEngine.CollisionDetectionMode;
    centerOfMass: UnityEngine.Vector3;
    readonly worldCenterOfMass: UnityEngine.Vector3;
    inertiaTensorRotation: UnityEngine.Quaternion;
    inertiaTensor: UnityEngine.Vector3;
    detectCollisions: boolean;
    useConeFriction: boolean;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    interpolation: UnityEngine.RigidbodyInterpolation;
    solverIterations: number;
    solverIterationCount: number;
    solverVelocityIterations: number;
    solverVelocityIterationCount: number;
    sleepVelocity: number;
    sleepAngularVelocity: number;
    sleepThreshold: number;
    maxAngularVelocity: number;
    // fields
  }
}
