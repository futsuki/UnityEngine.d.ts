declare namespace UnityEditor {
  class MemoryTreeList extends System.Object {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, detailview: UnityEditor.MemoryTreeList);
    // methods
    OnGUI(): void;
    SetRoot(root: UnityEditor.MemoryElement): void;
    GetRoot(): UnityEditor.MemoryElement;
    // properties
    RequiresRefresh: boolean;
    // fields
    m_MemorySelection: UnityEditor.MemoryElementSelection;
  }
}
