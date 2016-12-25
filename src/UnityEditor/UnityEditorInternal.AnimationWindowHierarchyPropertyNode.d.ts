declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyPropertyNode {
    // constructors
    constructor(animatableObjectType: any, setId: number, propertyName: string, path: string, parent: UnityEditor.IMGUI.Controls.TreeViewItem, binding: UnityEditor.EditorCurveBinding, isPptrNode: boolean);
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
    isPptrNode: boolean;
    path: string;
    animatableObjectType: any;
    propertyName: string;
    binding: any;
    curves: UnityEditorInternal.AnimationWindowCurve[];
    topPixel: any;
    indent: number;
  }
}
