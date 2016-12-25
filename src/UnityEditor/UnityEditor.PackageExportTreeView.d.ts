declare namespace UnityEditor {
  class PackageExportTreeView {
    // constructors
    constructor(packageExport: UnityEditor.PackageExport, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, startRect: any);
    // methods
    OnGUI(rect: any): any;
    SetAllEnabled(enabled: UnityEditor.PackageExportTreeView.EnabledState): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly items: UnityEditor.ExportPackageItem[];
    // fields
  }
}
