declare namespace UnityEditor {
  class GameObjectTreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    displayName: string;
    colorCode: number;
    objectPPTR: any;
    shouldDisplay: boolean;
    isSceneHeader: boolean;
    scene: any;
    id: number;
    depth: number;
    readonly hasChildren: boolean;
    children: any;
    parent: UnityEditor.IMGUI.Controls.TreeViewItem;
    icon: any;
    // fields
  }
}
