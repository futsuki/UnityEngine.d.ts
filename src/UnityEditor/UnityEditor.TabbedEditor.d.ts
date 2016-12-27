declare namespace UnityEditor {
  class TabbedEditor extends UnityEditor.Editor {
    // constructors
    protected constructor();
    // methods
    OnInspectorGUI(): void;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    HasPreviewGUI(): boolean;
    // properties
    readonly activeEditor: UnityEditor.Editor;
    // fields
  }
}
