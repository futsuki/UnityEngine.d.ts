declare namespace UnityEditor {
  class MemoryTreeList {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, detailview: UnityEditor.MemoryTreeList);
    // methods
    OnGUI(): void;
    SetRoot(root: UnityEditor.MemoryElement): void;
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
