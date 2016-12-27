declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewItem extends System.Object {
    // constructors
    constructor(id: number);
    constructor(id: number, depth: number);
    constructor(id: number, depth: number, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    // properties
    id: number;
    displayName: string;
    depth: number;
    readonly hasChildren: boolean;
    children: UnityEditor.IMGUI.Controls.TreeViewItem[];
    parent: UnityEditor.IMGUI.Controls.TreeViewItem;
    icon: any;
    // fields
  }
}
