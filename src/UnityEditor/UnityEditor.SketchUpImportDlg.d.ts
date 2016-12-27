declare namespace UnityEditor {
  class SketchUpImportDlg extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    Init(nodes: UnityEditor.SketchUpNodeInfo[], suModelEditor: UnityEditor.SketchUpImporterModelEditor): void;
    OnTreeSelectionChanged(selection: number[]): void;
    // properties
    // fields
  }
}
