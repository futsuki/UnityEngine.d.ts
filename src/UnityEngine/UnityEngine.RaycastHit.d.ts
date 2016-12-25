declare namespace UnityEngine {
  class RaycastHit {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
