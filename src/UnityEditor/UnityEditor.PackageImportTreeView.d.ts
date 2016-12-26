declare namespace UnityEditor {
  class PackageImportTreeView {
    // constructors
    constructor(packageImport: UnityEditor.PackageImport, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState, startRect: any);
    // methods
    OnGUI(rect: any): void;
    SetAllEnabled(state: UnityEditor.PackageImportTreeView.EnabledState): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly canReInstall: boolean;
    readonly doReInstall: boolean;
    readonly packageItems: UnityEditor.ImportPackageItem[];
    // fields
  }
}
