declare namespace UnityEngine.AI {
  class NavMeshPath {
    // constructors
    constructor();
    // methods
    GetCornersNonAlloc(results: UnityEngine.Vector3[]): number;
    ClearCorners(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly corners: UnityEngine.Vector3[];
    readonly status: UnityEngine.AI.NavMeshPathStatus;
    // fields
  }
}
