declare namespace UnityEngine {
  class WheelJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    GetMotorTorque(timeStep: number): number;
    // properties
    suspension: UnityEngine.JointSuspension2D;
    useMotor: boolean;
    motor: UnityEngine.JointMotor2D;
    readonly jointTranslation: number;
    readonly jointSpeed: number;
    // fields
  }
}
