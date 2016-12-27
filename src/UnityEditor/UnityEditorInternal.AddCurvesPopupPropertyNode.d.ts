declare namespace UnityEditorInternal {
  class AddCurvesPopupPropertyNode extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(parent: UnityEditor.IMGUI.Controls.TreeViewItem, selectionItem: UnityEditorInternal.AnimationWindowSelectionItem, curveBindings: UnityEditor.EditorCurveBinding[]);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    // properties
    // fields
    selectionItem: UnityEditorInternal.AnimationWindowSelectionItem;
    curveBindings: UnityEditor.EditorCurveBinding[];
  }
}
