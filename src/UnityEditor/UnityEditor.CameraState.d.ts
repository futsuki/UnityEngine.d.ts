declare namespace UnityEditor {
  class CameraState {
    // constructors
    constructor();
    // methods
    GetCameraDistance(): number;
    FixNegativeSize(): any;
    UpdateCamera(camera: any): any;
    Clone(): UnityEditor.CameraState;
    Copy(cameraStateIn: UnityEditor.CameraState): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    pivot: UnityEditor.AnimatedValues.AnimVector3;
    rotation: UnityEditor.AnimatedValues.AnimQuaternion;
    viewSize: UnityEditor.AnimatedValues.AnimFloat;
    // fields
  }
}
