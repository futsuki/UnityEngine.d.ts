declare namespace UnityEngine {
  class Cloth {
    // constructors
    constructor();
    // methods
    ClearTransformMotion(): void;
    SetEnabledFading(enabled: boolean, interpolationTime: number): void;
    SetEnabledFading(enabled: boolean): void;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: any): void;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
