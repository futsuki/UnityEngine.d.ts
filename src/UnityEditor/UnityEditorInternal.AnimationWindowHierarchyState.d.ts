declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyState extends UnityEditor.IMGUI.Controls.TreeViewState {
    // constructors
    constructor();
    // methods
    GetTallMode(node: UnityEditorInternal.AnimationWindowHierarchyNode): boolean;
    SetTallMode(node: UnityEditorInternal.AnimationWindowHierarchyNode, tallMode: boolean): void;
    GetTallInstancesCount(): number;
    AddTallInstance(id: number): void;
    // properties
    // fields
  }
}
