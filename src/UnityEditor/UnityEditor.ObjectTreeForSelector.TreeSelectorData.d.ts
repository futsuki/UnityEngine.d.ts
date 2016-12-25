declare namespace UnityEditor.ObjectTreeForSelector {
  class TreeSelectorData {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    objectTreeForSelector: UnityEditor.ObjectTreeForSelector;
    editorWindow: UnityEditor.EditorWindow;
    state: UnityEditor.IMGUI.Controls.TreeViewState;
    treeViewRect: any;
    userData: number;
  }
}
