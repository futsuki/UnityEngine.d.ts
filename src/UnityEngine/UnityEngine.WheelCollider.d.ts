declare namespace UnityEngine {
  class WheelCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    ConfigureVehicleSubsteps(speedThreshold: number, stepsBelowThreshold: number, stepsAboveThreshold: number): void;
    GetGroundHit(hit: any): boolean;
    GetWorldPose(pos: any, quat: any): void;
    // properties
    center: UnityEngine.Vector3;
    radius: number;
    suspensionDistance: number;
    suspensionSpring: UnityEngine.JointSpring;
    forceAppPointDistance: number;
    mass: number;
    wheelDampingRate: number;
    forwardFriction: UnityEngine.WheelFrictionCurve;
    sidewaysFriction: UnityEngine.WheelFrictionCurve;
    motorTorque: number;
    brakeTorque: number;
    steerAngle: number;
    readonly isGrounded: boolean;
    readonly sprungMass: number;
    readonly rpm: number;
    // fields
  }
}
