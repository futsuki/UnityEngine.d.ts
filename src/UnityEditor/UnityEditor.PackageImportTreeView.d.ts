declare namespace UnityEditor {
  class PackageImportTreeView extends System.Object {
    // constructors
    constructor(packageImport: UnityEditor.PackageImport, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, startRect: any);
    // methods
    OnGUI(rect: any): void;
    SetAllEnabled(state: UnityEditor.PackageImportTreeView.EnabledState): void;
    // properties
    readonly canReInstall: boolean;
    readonly doReInstall: boolean;
    readonly packageItems: UnityEditor.ImportPackageItem[];
    // fields
  }
}
