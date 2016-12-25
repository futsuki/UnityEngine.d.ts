declare namespace UnityEditorInternal {
  class AddCurvesPopupPropertyNode {
    // constructors
    constructor(parent: UnityEditor.IMGUI.Controls.TreeViewItem, selectionItem: UnityEditorInternal.AnimationWindowSelectionItem, curveBindings: UnityEditor.EditorCurveBinding[]);
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
    selectionItem: UnityEditorInternal.AnimationWindowSelectionItem;
    curveBindings: UnityEditor.EditorCurveBinding[];
  }
}
