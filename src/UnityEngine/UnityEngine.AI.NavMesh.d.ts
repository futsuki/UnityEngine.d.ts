declare namespace UnityEngine.AI {
  class NavMesh {
    // constructors
    constructor();
    // methods
    static Raycast(sourcePosition: UnityEngine.Vector3, targetPosition: UnityEngine.Vector3, hit: any, areaMask: number): boolean;
    static CalculatePath(sourcePosition: UnityEngine.Vector3, targetPosition: UnityEngine.Vector3, areaMask: number, path: UnityEngine.AI.NavMeshPath): boolean;
    static FindClosestEdge(sourcePosition: UnityEngine.Vector3, hit: any, areaMask: number): boolean;
    static SamplePosition(sourcePosition: UnityEngine.Vector3, hit: any, maxDistance: number, areaMask: number): boolean;
    static SetLayerCost(layer: number, cost: number): void;
    static GetLayerCost(layer: number): number;
    static GetNavMeshLayerFromName(layerName: string): number;
    static SetAreaCost(areaIndex: number, cost: number): void;
    static GetAreaCost(areaIndex: number): number;
    static GetAreaFromName(areaName: string): number;
    static CalculateTriangulation(): UnityEngine.AI.NavMeshTriangulation;
    static Triangulate(vertices: any, indices: any): void;
    static AddOffMeshLinks(): void;
    static RestoreNavMesh(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static avoidancePredictionTime: number;
    static pathfindingIterationsPerFrame: number;
    // fields
    static AllAreas: number;
  }
}
