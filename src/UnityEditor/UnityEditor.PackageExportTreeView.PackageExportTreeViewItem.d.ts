declare namespace UnityEditor.PackageExportTreeView {
  class PackageExportTreeViewItem {
    // constructors
    constructor(itemIn: UnityEditor.ExportPackageItem, id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    item: UnityEditor.ExportPackageItem;
    enabledState: UnityEditor.PackageExportTreeView.EnabledState;
    readonly isFolder: boolean;
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
