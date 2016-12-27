declare namespace UnityEditor {
  class ColliderEditorBase extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    // properties
    readonly editingCollider: boolean;
    // fields
  }
}
