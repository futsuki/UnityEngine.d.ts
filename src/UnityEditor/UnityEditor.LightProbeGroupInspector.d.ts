declare namespace UnityEditor {
  class LightProbeGroupInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    StartEditMode(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    OnSceneGUI(): void;
    OnSceneGUIDelegate(sceneView: UnityEditor.SceneView): void;
    HasFrameBounds(): boolean;
    OnGetFrameBounds(): any;
    // properties
    // fields
  }
}
