declare namespace UnityEditor {
  class ModelImporterClipEditor extends UnityEditor.AssetImporterInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDestroy(): void;
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    // properties
    selectedClipIndex: number;
    motionNodeIndex: number;
    pivotNodeIndex: number;
    // fields
    m_SelectedClipIndexDoNotUseDirectly: number;
  }
}
