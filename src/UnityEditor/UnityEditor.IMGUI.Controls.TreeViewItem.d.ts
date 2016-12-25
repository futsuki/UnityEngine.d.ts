declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewItem {
    // constructors
    constructor(id: number);
    constructor(id: number, depth: number);
    constructor(id: number, depth: number, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
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
