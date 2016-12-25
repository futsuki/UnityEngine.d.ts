declare namespace UnityEngine {
  class WheelHit {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
