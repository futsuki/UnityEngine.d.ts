declare namespace UnityEditor {
  class NavMeshEditorWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static SetupWindow(): void;
    OnEnable(): void;
    OnDisable(): void;
    OnGUI(): void;
    OnBecameVisible(): void;
    OnBecameInvisible(): void;
    OnSceneViewGUI(sceneView: UnityEditor.SceneView): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    static BackgroundTaskStatusChanged(): void;
    // properties
    // fields
  }
}
