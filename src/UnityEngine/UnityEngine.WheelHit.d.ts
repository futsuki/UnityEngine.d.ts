declare namespace UnityEngine {
  class WheelHit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    collider: UnityEngine.Collider;
    point: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    forwardDir: UnityEngine.Vector3;
    sidewaysDir: UnityEngine.Vector3;
    force: number;
    forwardSlip: number;
    sidewaysSlip: number;
    // fields
  }
}
