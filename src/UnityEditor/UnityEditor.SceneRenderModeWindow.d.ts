declare namespace UnityEditor {
  class SceneRenderModeWindow {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    GetWindowSize(): any;
    OnOpen(): void;
    OnGUI(rect: any): void;
    static GetGUIContent(drawCameraMode: UnityEditor.DrawCameraMode): any;
    OnClose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
