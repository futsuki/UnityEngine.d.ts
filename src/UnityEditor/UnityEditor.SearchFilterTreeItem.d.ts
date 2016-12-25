declare namespace UnityEditor {
  class SearchFilterTreeItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, isFolder: boolean);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
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
