declare namespace UnityEngine {
  class GeometryUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static CalculateFrustumPlanes(camera: UnityEngine.Camera): UnityEngine.Plane[];
    static CalculateFrustumPlanes(worldToProjectionMatrix: UnityEngine.Matrix4x4): UnityEngine.Plane[];
    static TestPlanesAABB(planes: UnityEngine.Plane[], bounds: UnityEngine.Bounds): boolean;
    static CalculateBounds(positions: UnityEngine.Vector3[], transform: UnityEngine.Matrix4x4): UnityEngine.Bounds;
    // properties
    // fields
  }
}
