declare namespace UnityEngine.VR.WSA {
  class SurfaceData {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    id: UnityEngine.VR.WSA.SurfaceId;
    outputMesh: UnityEngine.MeshFilter;
    outputAnchor: UnityEngine.VR.WSA.WorldAnchor;
    outputCollider: UnityEngine.MeshCollider;
    trianglesPerCubicMeter: number;
    bakeCollider: boolean;
  }
}
