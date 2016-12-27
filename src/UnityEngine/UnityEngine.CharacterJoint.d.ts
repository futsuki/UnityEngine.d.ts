declare namespace UnityEngine {
  class CharacterJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    swingAxis: UnityEngine.Vector3;
    twistLimitSpring: UnityEngine.SoftJointLimitSpring;
    swingLimitSpring: UnityEngine.SoftJointLimitSpring;
    lowTwistLimit: UnityEngine.SoftJointLimit;
    highTwistLimit: UnityEngine.SoftJointLimit;
    swing1Limit: UnityEngine.SoftJointLimit;
    swing2Limit: UnityEngine.SoftJointLimit;
    enableProjection: boolean;
    projectionDistance: number;
    projectionAngle: number;
    // fields
    targetRotation: UnityEngine.Quaternion;
    targetAngularVelocity: UnityEngine.Vector3;
    rotationDrive: UnityEngine.JointDrive;
  }
}
