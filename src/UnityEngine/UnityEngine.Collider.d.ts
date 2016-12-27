declare namespace UnityEngine {
  class Collider extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    ClosestPointOnBounds(position: UnityEngine.Vector3): UnityEngine.Vector3;
    Raycast(ray: UnityEngine.Ray, hitInfo: any, maxDistance: number): boolean;
    // properties
    enabled: boolean;
    readonly attachedRigidbody: UnityEngine.Rigidbody;
    isTrigger: boolean;
    contactOffset: number;
    material: UnityEngine.PhysicMaterial;
    sharedMaterial: UnityEngine.PhysicMaterial;
    readonly bounds: UnityEngine.Bounds;
    // fields
  }
}
