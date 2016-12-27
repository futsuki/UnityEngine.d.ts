declare namespace UnityEditor {
  class Collider2DEditorBase extends UnityEditor.ColliderEditorBase {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    FinalizeInspectorGUI(): void;
    // properties
    // fields
  }
}
