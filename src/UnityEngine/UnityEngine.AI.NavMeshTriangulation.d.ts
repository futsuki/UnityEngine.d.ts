declare namespace UnityEngine.AI {
  class NavMeshTriangulation {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly layers: number[];
    // fields
    vertices: UnityEngine.Vector3[];
    indices: number[];
    areas: number[];
  }
}
