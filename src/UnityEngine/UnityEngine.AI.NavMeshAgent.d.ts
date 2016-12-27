declare namespace UnityEngine.AI {
  class NavMeshAgent extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    SetDestination(target: UnityEngine.Vector3): boolean;
    ActivateCurrentOffMeshLink(activated: boolean): void;
    CompleteOffMeshLink(): void;
    Warp(newPosition: UnityEngine.Vector3): boolean;
    Move(offset: UnityEngine.Vector3): void;
    Stop(): void;
    Stop(stopUpdates: boolean): void;
    Resume(): void;
    ResetPath(): void;
    SetPath(path: UnityEngine.AI.NavMeshPath): boolean;
    FindClosestEdge(hit: any): boolean;
    Raycast(targetPosition: UnityEngine.Vector3, hit: any): boolean;
    CalculatePath(targetPosition: UnityEngine.Vector3, path: UnityEngine.AI.NavMeshPath): boolean;
    SamplePathPosition(areaMask: number, maxDistance: number, hit: any): boolean;
    SetLayerCost(layer: number, cost: number): void;
    GetLayerCost(layer: number): number;
    SetAreaCost(areaIndex: number, areaCost: number): void;
    GetAreaCost(areaIndex: number): number;
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
    // fields
  }
}
