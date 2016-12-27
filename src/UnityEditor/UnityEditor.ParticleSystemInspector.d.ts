declare namespace UnityEditor {
  class ParticleSystemInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): void;
    OnSceneGUI(): void;
    OnSceneViewGUI(sceneView: UnityEditor.SceneView): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    GetPreviewTitle(): any;
    OnPreviewSettings(): void;
    // properties
    static readonly playBackTitle: any;
    // fields
  }
}
