declare namespace UnityEngine {
  class SliderJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    GetMotorForce(timeStep: number): number;
    // properties
    autoConfigureAngle: boolean;
    angle: number;
    useMotor: boolean;
    useLimits: boolean;
    motor: UnityEngine.JointMotor2D;
    limits: UnityEngine.JointTranslationLimits2D;
    readonly limitState: UnityEngine.JointLimitState2D;
    readonly referenceAngle: number;
    readonly jointTranslation: number;
    readonly jointSpeed: number;
    // fields
  }
}
