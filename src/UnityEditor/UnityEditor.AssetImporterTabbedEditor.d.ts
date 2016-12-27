declare namespace UnityEditor {
  class AssetImporterTabbedEditor extends UnityEditor.AssetImporterInspector {
    // constructors
    protected constructor();
    // methods
    OnInspectorGUI(): void;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    HasPreviewGUI(): boolean;
    // properties
    readonly activeEditor: UnityEditor.AssetImporterInspector;
    // fields
  }
}
