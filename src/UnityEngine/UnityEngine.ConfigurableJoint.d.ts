declare namespace UnityEngine {
  class ConfigurableJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    secondaryAxis: UnityEngine.Vector3;
    xMotion: UnityEngine.ConfigurableJointMotion;
    yMotion: UnityEngine.ConfigurableJointMotion;
    zMotion: UnityEngine.ConfigurableJointMotion;
    angularXMotion: UnityEngine.ConfigurableJointMotion;
    angularYMotion: UnityEngine.ConfigurableJointMotion;
    angularZMotion: UnityEngine.ConfigurableJointMotion;
    linearLimitSpring: UnityEngine.SoftJointLimitSpring;
    angularXLimitSpring: UnityEngine.SoftJointLimitSpring;
    angularYZLimitSpring: UnityEngine.SoftJointLimitSpring;
    linearLimit: UnityEngine.SoftJointLimit;
    lowAngularXLimit: UnityEngine.SoftJointLimit;
    highAngularXLimit: UnityEngine.SoftJointLimit;
    angularYLimit: UnityEngine.SoftJointLimit;
    angularZLimit: UnityEngine.SoftJointLimit;
    targetPosition: UnityEngine.Vector3;
    targetVelocity: UnityEngine.Vector3;
    xDrive: UnityEngine.JointDrive;
    yDrive: UnityEngine.JointDrive;
    zDrive: UnityEngine.JointDrive;
    targetRotation: UnityEngine.Quaternion;
    targetAngularVelocity: UnityEngine.Vector3;
    rotationDriveMode: UnityEngine.RotationDriveMode;
    angularXDrive: UnityEngine.JointDrive;
    angularYZDrive: UnityEngine.JointDrive;
    slerpDrive: UnityEngine.JointDrive;
    projectionMode: UnityEngine.JointProjectionMode;
    projectionDistance: number;
    projectionAngle: number;
    configuredInWorldSpace: boolean;
    swapBodies: boolean;
    // fields
  }
}
