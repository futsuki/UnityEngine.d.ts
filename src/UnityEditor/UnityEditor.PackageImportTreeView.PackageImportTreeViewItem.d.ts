declare namespace UnityEditor.PackageImportTreeView {
  class PackageImportTreeViewItem {
    // constructors
    constructor(itemIn: UnityEditor.ImportPackageItem, id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    item: UnityEditor.ImportPackageItem;
    enableState: UnityEditor.PackageImportTreeView.EnabledState;
    id: number;
    displayName: string;
    depth: number;
    readonly hasChildren: boolean;
    children: any;
    parent: UnityEditor.IMGUI.Controls.TreeViewItem;
    icon: any;
    // fields
  }
}
