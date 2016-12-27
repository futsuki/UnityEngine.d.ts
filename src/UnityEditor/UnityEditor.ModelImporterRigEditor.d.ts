declare namespace UnityEditor {
  class ModelImporterRigEditor extends UnityEditor.AssetImporterInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    // properties
    rootIndex: number;
    readonly isLocked: boolean;
    // fields
    m_SelectedClipIndex: number;
  }
}
