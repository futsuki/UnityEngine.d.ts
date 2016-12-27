declare namespace UnityEngine {
  class RelativeJoint2D extends UnityEngine.Joint2D {
    // constructors
    constructor();
    // methods
    // properties
    maxForce: number;
    maxTorque: number;
    correctionScale: number;
    autoConfigureOffset: boolean;
    linearOffset: UnityEngine.Vector2;
    angularOffset: number;
    readonly target: UnityEngine.Vector2;
    // fields
  }
}
