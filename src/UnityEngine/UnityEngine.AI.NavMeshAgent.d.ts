declare namespace UnityEngine.AI {
  class NavMeshAgent {
    // constructors
    constructor();
    // methods
    SetDestination(target: UnityEngine.Vector3): boolean;
    ActivateCurrentOffMeshLink(activated: boolean): any;
    CompleteOffMeshLink(): any;
    Warp(newPosition: UnityEngine.Vector3): boolean;
    Move(offset: UnityEngine.Vector3): any;
    Stop(): any;
    Stop(stopUpdates: boolean): any;
    Resume(): any;
    ResetPath(): any;
    SetPath(path: UnityEngine.AI.NavMeshPath): boolean;
    FindClosestEdge(hit: any): boolean;
    Raycast(targetPosition: UnityEngine.Vector3, hit: any): boolean;
    CalculatePath(targetPosition: UnityEngine.Vector3, path: UnityEngine.AI.NavMeshPath): boolean;
    SamplePathPosition(areaMask: number, maxDistance: number, hit: any): boolean;
    SetLayerCost(layer: number, cost: number): any;
    GetLayerCost(layer: number): number;
    SetAreaCost(areaIndex: number, areaCost: number): any;
    GetAreaCost(areaIndex: number): number;
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
    destination: UnityEngine.Vector3;
    stoppingDistance: number;
    velocity: UnityEngine.Vector3;
    nextPosition: UnityEngine.Vector3;
    readonly steeringTarget: UnityEngine.Vector3;
    readonly desiredVelocity: UnityEngine.Vector3;
    readonly remainingDistance: number;
    baseOffset: number;
    readonly isOnOffMeshLink: boolean;
    readonly currentOffMeshLinkData: UnityEngine.AI.OffMeshLinkData;
    readonly nextOffMeshLinkData: UnityEngine.AI.OffMeshLinkData;
    autoTraverseOffMeshLink: boolean;
    autoBraking: boolean;
    autoRepath: boolean;
    readonly hasPath: boolean;
    readonly pathPending: boolean;
    readonly isPathStale: boolean;
    readonly pathStatus: UnityEngine.AI.NavMeshPathStatus;
    readonly pathEndPosition: UnityEngine.Vector3;
    path: UnityEngine.AI.NavMeshPath;
    walkableMask: number;
    areaMask: number;
    speed: number;
    angularSpeed: number;
    acceleration: number;
    updatePosition: boolean;
    updateRotation: boolean;
    radius: number;
    height: number;
    obstacleAvoidanceType: UnityEngine.AI.ObstacleAvoidanceType;
    avoidancePriority: number;
    readonly isOnNavMesh: boolean;
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