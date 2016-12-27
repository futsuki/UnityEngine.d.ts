declare namespace UnityEditor {
  class CameraState extends System.Object {
    // constructors
    constructor();
    // methods
    GetCameraDistance(): number;
    FixNegativeSize(): void;
    UpdateCamera(camera: any): void;
    Clone(): UnityEditor.CameraState;
    Copy(cameraStateIn: UnityEditor.CameraState): void;
    // properties
    pivot: UnityEditor.AnimatedValues.AnimVector3;
    rotation: UnityEditor.AnimatedValues.AnimQuaternion;
    viewSize: UnityEditor.AnimatedValues.AnimFloat;
    // fields
  }
}
