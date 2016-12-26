declare namespace UnityEditor {
  class CameraControllerStandard {
    // constructors
    constructor();
    // methods
    Update(cameraState: UnityEditor.CameraState, cam: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly currentViewTool: UnityEditor.ViewTool;
    // fields
  }
}
