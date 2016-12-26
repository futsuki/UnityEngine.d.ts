declare namespace UnityEditor {
  class SceneFXWindow {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    OnOpen(): void;
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
