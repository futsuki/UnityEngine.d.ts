declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyClipNode {
    // constructors
    constructor(parent: UnityEditor.IMGUI.Controls.TreeViewItem, setId: number, name: string);
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
    path: string;
    animatableObjectType: any;
    propertyName: string;
    binding: any;
    curves: UnityEditorInternal.AnimationWindowCurve[];
    topPixel: any;
    indent: number;
  }
}
