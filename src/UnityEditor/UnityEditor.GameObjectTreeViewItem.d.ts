declare namespace UnityEditor {
  class GameObjectTreeViewItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    // properties
    displayName: string;
    colorCode: number;
    objectPPTR: UnityEngine.Object;
    shouldDisplay: boolean;
    isSceneHeader: boolean;
    scene: any;
    // fields
  }
}
