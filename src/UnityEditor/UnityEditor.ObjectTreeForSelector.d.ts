declare namespace UnityEditor {
  class ObjectTreeForSelector {
    // constructors
    constructor();
    // methods
    IsInitialized(): boolean;
    Init(position: any, owner: UnityEditor.EditorWindow, treeViewNeededCallback: ((UnityEditor.ObjectTreeForSelector.TreeSelectorData) => void), selectionCallback: ((UnityEditor.IMGUI.Controls.TreeViewItem) => void), doubleClickedCallback: (() => void), initialSelectedTreeViewItemID: number, userData: number): void;
    Clear(): void;
    GetSelection(): number[];
    SetTreeView(treeView: UnityEditor.IMGUI.Controls.TreeViewController): void;
    OnGUI(position: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
