declare namespace UnityEditor {
  class SceneFXWindow {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    OnOpen(): any;
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
