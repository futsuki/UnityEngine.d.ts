declare namespace UnityEditor {
  class SceneRenderModeWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    GetWindowSize(): any;
    OnOpen(): void;
    OnGUI(rect: any): void;
    static GetGUIContent(drawCameraMode: UnityEditor.DrawCameraMode): any;
    // properties
    // fields
  }
}
