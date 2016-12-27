declare namespace UnityEngine.AI {
  class NavMeshObstacle extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    height: number;
    radius: number;
    velocity: UnityEngine.Vector3;
    carving: boolean;
    carveOnlyStationary: boolean;
    carvingMoveThreshold: number;
    carvingTimeToStationary: number;
    shape: UnityEngine.AI.NavMeshObstacleShape;
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    // fields
  }
}
