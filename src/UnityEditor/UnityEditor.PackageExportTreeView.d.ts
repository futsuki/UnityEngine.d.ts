declare namespace UnityEditor {
  class PackageExportTreeView {
    // constructors
    constructor(packageExport: UnityEditor.PackageExport, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, startRect: any);
    // methods
    OnGUI(rect: any): void;
    SetAllEnabled(enabled: UnityEditor.PackageExportTreeView.EnabledState): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly items: UnityEditor.ExportPackageItem[];
    // fields
  }
}
