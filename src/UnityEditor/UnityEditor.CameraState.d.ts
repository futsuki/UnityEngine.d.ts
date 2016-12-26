declare namespace UnityEditor {
  class CameraState {
    // constructors
    constructor();
    // methods
    GetCameraDistance(): number;
    FixNegativeSize(): void;
    UpdateCamera(camera: any): void;
    Clone(): UnityEditor.CameraState;
    Copy(cameraStateIn: UnityEditor.CameraState): void;
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
