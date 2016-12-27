declare namespace UnityEditor {
  class CameraControllerStandard extends UnityEditor.CameraController {
    // constructors
    constructor();
    // methods
    Update(cameraState: UnityEditor.CameraState, cam: any): void;
    // properties
    readonly currentViewTool: UnityEditor.ViewTool;
    // fields
  }
}
