declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyDataSource extends UnityEditor.IMGUI.Controls.TreeViewDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, animationWindowState: UnityEditorInternal.AnimationWindowState);
    // methods
    FetchData(): void;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CreateTreeFromCurves(): UnityEditorInternal.AnimationWindowHierarchyNode[];
    GetIcon(selectedItem: UnityEditorInternal.AnimationWindowSelectionItem, curveBinding: UnityEditor.EditorCurveBinding): any;
    UpdateData(): void;
    // properties
    showAll: boolean;
    // fields
  }
}
