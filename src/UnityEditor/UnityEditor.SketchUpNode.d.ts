declare namespace UnityEditor {
  class SketchUpNode extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, info: UnityEditor.SketchUpNodeInfo);
    // methods
    // properties
    Enabled: boolean;
    // fields
    Info: UnityEditor.SketchUpNodeInfo;
  }
}
