declare namespace UnityEditor {
  class AssetsTreeViewGUI extends UnityEditor.IMGUI.Controls.TreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    BeginRowGUI(): void;
    BeginCreateNewAsset(instanceID: number, endAction: UnityEditor.ProjectWindowCallback.EndNameEditAction, pathName: string, icon: any, resourceFile: string): void;
    // properties
    // fields
  }
}
