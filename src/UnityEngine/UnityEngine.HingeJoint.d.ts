declare namespace UnityEngine {
  class HingeJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    motor: UnityEngine.JointMotor;
    limits: UnityEngine.JointLimits;
    spring: UnityEngine.JointSpring;
    useMotor: boolean;
    useLimits: boolean;
    useSpring: boolean;
    readonly velocity: number;
    readonly angle: number;
    // fields
  }
}
