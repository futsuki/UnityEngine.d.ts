declare namespace UnityEditor {
  class TagManagerInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    ReorderSortLayerList(list: UnityEditorInternal.ReorderableList): void;
    OnInspectorGUI(): void;
    // properties
    readonly tagManager: UnityEditor.TagManager;
    // fields
  }
}
