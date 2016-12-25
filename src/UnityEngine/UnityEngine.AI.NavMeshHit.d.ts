declare namespace UnityEngine.AI {
  class NavMeshHit {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    position: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    distance: number;
    mask: number;
    hit: boolean;
    // fields
  }
}
