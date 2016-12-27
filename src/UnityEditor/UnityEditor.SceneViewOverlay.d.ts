declare namespace UnityEditor {
  class SceneViewOverlay extends System.Object {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    Begin(): void;
    End(): void;
    static Window(title: any, sceneViewFunc: ((target: UnityEngine.Object, sceneView: UnityEditor.SceneView) => void), order: number, option: UnityEditor.SceneViewOverlay.WindowDisplayOption): void;
    static Window(title: any, sceneViewFunc: ((target: UnityEngine.Object, sceneView: UnityEditor.SceneView) => void), order: number, target: UnityEngine.Object, option: UnityEditor.SceneViewOverlay.WindowDisplayOption): void;
    // properties
    // fields
  }
}
