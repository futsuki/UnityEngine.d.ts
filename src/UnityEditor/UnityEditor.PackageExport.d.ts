declare namespace UnityEditor {
  class PackageExport extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnGUI(): void;
    // properties
    readonly items: UnityEditor.ExportPackageItem[];
    // fields
  }
}
