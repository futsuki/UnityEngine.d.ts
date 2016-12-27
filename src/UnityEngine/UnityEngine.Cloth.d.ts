declare namespace UnityEngine {
  class Cloth extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    ClearTransformMotion(): void;
    SetEnabledFading(enabled: boolean, interpolationTime: number): void;
    SetEnabledFading(enabled: boolean): void;
    // properties
    sleepThreshold: number;
    bendingStiffness: number;
    stretchingStiffness: number;
    damping: number;
    externalAcceleration: UnityEngine.Vector3;
    randomAcceleration: UnityEngine.Vector3;
    useGravity: boolean;
    selfCollision: boolean;
    enabled: boolean;
    readonly vertices: UnityEngine.Vector3[];
    readonly normals: UnityEngine.Vector3[];
    friction: number;
    collisionMassScale: number;
    useContinuousCollision: number;
    useVirtualParticles: number;
    coefficients: UnityEngine.ClothSkinningCoefficient[];
    worldVelocityScale: number;
    worldAccelerationScale: number;
    solverFrequency: boolean;
    capsuleColliders: UnityEngine.CapsuleCollider[];
    sphereColliders: UnityEngine.ClothSphereColliderPair[];
    // fields
  }
}
