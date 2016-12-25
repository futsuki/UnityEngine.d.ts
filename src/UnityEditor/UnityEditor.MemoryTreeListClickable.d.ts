declare namespace UnityEditor {
  class MemoryTreeListClickable {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, detailview: UnityEditor.MemoryTreeList);
    // methods
    OnGUI(): any;
    SetRoot(root: UnityEditor.MemoryElement): any;
    GetRoot(): UnityEditor.MemoryElement;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    RequiresRefresh: boolean;
    // fields
    m_MemorySelection: UnityEditor.MemoryElementSelection;
  }
}
