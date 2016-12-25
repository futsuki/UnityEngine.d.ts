declare namespace UnityEditor.AI {
  class NavMeshVisualizationSettings {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static showNavigation: number;
    static showNavMesh: boolean;
    static showHeightMesh: boolean;
    static showNavMeshPortals: boolean;
    static showNavMeshLinks: boolean;
    static showProximityGrid: boolean;
    static showHeightMeshBVTree: boolean;
    static readonly hasHeightMesh: boolean;
    static showAgentPath: boolean;
    static showAgentPathInfo: boolean;
    static showAgentNeighbours: boolean;
    static showAgentWalls: boolean;
    static showAgentAvoidance: boolean;
    static showObstacleCarveHull: boolean;
    static readonly hasPendingAgentDebugInfo: boolean;
    // fields
  }
}
