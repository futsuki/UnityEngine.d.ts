declare namespace UnityEngine {
  class RaycastHit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    point: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    barycentricCoordinate: UnityEngine.Vector3;
    distance: number;
    readonly triangleIndex: number;
    readonly textureCoord: UnityEngine.Vector2;
    readonly textureCoord2: UnityEngine.Vector2;
    readonly textureCoord1: UnityEngine.Vector2;
    readonly lightmapCoord: UnityEngine.Vector2;
    readonly collider: UnityEngine.Collider;
    readonly rigidbody: UnityEngine.Rigidbody;
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
