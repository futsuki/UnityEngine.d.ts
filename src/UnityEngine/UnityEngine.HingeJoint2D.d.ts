declare namespace UnityEngine {
  class HingeJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    GetMotorTorque(timeStep: number): number;
    // properties
    useMotor: boolean;
    useLimits: boolean;
    motor: UnityEngine.JointMotor2D;
    limits: UnityEngine.JointAngleLimits2D;
    readonly limitState: UnityEngine.JointLimitState2D;
    readonly referenceAngle: number;
    readonly jointAngle: number;
    readonly jointSpeed: number;
    // fields
  }
}
