declare namespace UnityEditor {
  class CameraEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDestroy(): void;
    OnInspectorGUI(): void;
    OnOverlayGUI(target: UnityEngine.Object, sceneView: UnityEditor.SceneView): void;
    OnSceneGUI(): void;
    // properties
    // fields
  }
}
