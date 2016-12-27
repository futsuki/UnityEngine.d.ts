declare namespace UnityEditor {
  class SketchUpImporterModelEditor extends UnityEditor.ModelImporterModelEditor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    SetSelectedNodes(selectedNodes: number[]): void;
    // properties
    // fields
  }
}
