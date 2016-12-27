declare namespace UnityEditor {
  class IDropArea {
    // constructors
    protected constructor();
    // methods
    DragOver(w: UnityEditor.EditorWindow, screenPos: any): UnityEditor.DropInfo;
    PerformDrop(w: UnityEditor.EditorWindow, dropInfo: UnityEditor.DropInfo, screenPos: any): boolean;
    // properties
    // fields
  }
}
