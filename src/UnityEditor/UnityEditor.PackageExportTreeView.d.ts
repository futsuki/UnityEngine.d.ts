declare namespace UnityEditor {
  class PackageExportTreeView extends System.Object {
    // constructors
    constructor(packageExport: UnityEditor.PackageExport, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, startRect: any);
    // methods
    OnGUI(rect: any): void;
    SetAllEnabled(enabled: UnityEditor.PackageExportTreeView.EnabledState): void;
    // properties
    readonly items: UnityEditor.ExportPackageItem[];
    // fields
  }
}
