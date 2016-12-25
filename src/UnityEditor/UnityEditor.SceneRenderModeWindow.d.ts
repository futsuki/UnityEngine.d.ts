declare namespace UnityEditor {
  class SceneRenderModeWindow {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    GetWindowSize(): any;
    OnOpen(): any;
    OnGUI(rect: any): any;
    static GetGUIContent(drawCameraMode: UnityEditor.DrawCameraMode): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
