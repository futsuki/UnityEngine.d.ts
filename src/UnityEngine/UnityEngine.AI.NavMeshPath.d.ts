declare namespace UnityEngine.AI {
  class NavMeshPath extends System.Object {
    // constructors
    constructor();
    // methods
    GetCornersNonAlloc(results: UnityEngine.Vector3[]): number;
    ClearCorners(): void;
    // properties
    readonly corners: UnityEngine.Vector3[];
    readonly status: UnityEngine.AI.NavMeshPathStatus;
    // fields
  }
}
