declare namespace UnityEngine.VR.WSA {
  class SurfaceData extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
