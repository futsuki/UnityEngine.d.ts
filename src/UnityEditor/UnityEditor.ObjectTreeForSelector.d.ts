declare namespace UnityEditor {
  class ObjectTreeForSelector {
    // constructors
    constructor();
    // methods
    IsInitialized(): boolean;
    Init(position: any, owner: UnityEditor.EditorWindow, treeViewNeededCallback: any, selectionCallback: any, doubleClickedCallback: any, initialSelectedTreeViewItemID: number, userData: number): any;
    Clear(): any;
    GetSelection(): number[];
    SetTreeView(treeView: UnityEditor.IMGUI.Controls.TreeViewController): any;
    OnGUI(position: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
