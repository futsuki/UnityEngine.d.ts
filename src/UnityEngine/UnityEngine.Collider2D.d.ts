declare namespace UnityEngine {
  class Collider2D {
    // constructors
    constructor();
    // methods
    IsTouching(collider: UnityEngine.Collider2D): boolean;
    IsTouchingLayers(layerMask: number): boolean;
    IsTouchingLayers(): boolean;
    OverlapPoint(point: UnityEngine.Vector2): boolean;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, ignoreSiblingColliders: boolean): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
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
    density: number;
    isTrigger: boolean;
    usedByEffector: boolean;
    offset: UnityEngine.Vector2;
    readonly attachedRigidbody: UnityEngine.Rigidbody2D;
    readonly shapeCount: number;
    readonly bounds: UnityEngine.Bounds;
    sharedMaterial: UnityEngine.PhysicsMaterial2D;
    readonly friction: number;
    readonly bounciness: number;
    enabled: boolean;
    readonly isActiveAndEnabled: boolean;
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
