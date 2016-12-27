declare namespace UnityEditor {
  class ReflectionProbeEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnPreviewGUI(position: any, style: any): void;
    OnSceneGUI(): void;
    // properties
    // fields
  }
}
