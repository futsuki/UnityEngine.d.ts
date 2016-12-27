declare namespace UnityEditor {
  class LightingEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    // properties
    parentWindow: UnityEditor.EditorWindow;
    // fields
  }
}
