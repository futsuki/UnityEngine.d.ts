declare namespace UnityEngine {
  class WheelCollider {
    // constructors
    constructor();
    // methods
    ConfigureVehicleSubsteps(speedThreshold: number, stepsBelowThreshold: number, stepsAboveThreshold: number): any;
    GetGroundHit(hit: any): boolean;
    GetWorldPose(pos: any, quat: any): any;
    ClosestPointOnBounds(position: UnityEngine.Vector3): UnityEngine.Vector3;
    Raycast(ray: UnityEngine.Ray, hitInfo: any, maxDistance: number): boolean;
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
    GetComponents(type: any, results: any): any;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): any;
    SendMessageUpwards(methodName: string, value: any): any;
    SendMessageUpwards(methodName: string): any;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): any;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): any;
    SendMessage(methodName: string, value: any): any;
    SendMessage(methodName: string): any;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): any;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): any;
    BroadcastMessage(methodName: string, parameter: any): any;
    BroadcastMessage(methodName: string): any;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    center: UnityEngine.Vector3;
    radius: number;
    suspensionDistance: number;
    suspensionSpring: UnityEngine.JointSpring;
    forceAppPointDistance: number;
    mass: number;
    wheelDampingRate: number;
    forwardFriction: UnityEngine.WheelFrictionCurve;
    sidewaysFriction: UnityEngine.WheelFrictionCurve;
    motorTorque: number;
    brakeTorque: number;
    steerAngle: number;
    readonly isGrounded: boolean;
    readonly sprungMass: number;
    readonly rpm: number;
    enabled: boolean;
    readonly attachedRigidbody: UnityEngine.Rigidbody;
    isTrigger: boolean;
    contactOffset: number;
    material: UnityEngine.PhysicMaterial;
    sharedMaterial: UnityEngine.PhysicMaterial;
    readonly bounds: UnityEngine.Bounds;
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
