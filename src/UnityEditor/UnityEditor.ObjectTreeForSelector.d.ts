declare namespace UnityEditor {
  class ObjectTreeForSelector extends System.Object {
    // constructors
    constructor();
    // methods
    IsInitialized(): boolean;
    Init(position: any, owner: UnityEditor.EditorWindow, treeViewNeededCallback: ((arg0: UnityEditor.ObjectTreeForSelector.TreeSelectorData) => void), selectionCallback: ((arg0: UnityEditor.IMGUI.Controls.TreeViewItem) => void), doubleClickedCallback: (() => void), initialSelectedTreeViewItemID: number, userData: number): void;
    Clear(): void;
    GetSelection(): number[];
    SetTreeView(treeView: UnityEditor.IMGUI.Controls.TreeViewController): void;
    OnGUI(position: any): void;
    // properties
    // fields
  }
}
