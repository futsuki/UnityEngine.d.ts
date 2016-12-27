declare namespace UnityEditor {
  class AvatarSubEditor extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): void;
    Disable(): void;
    OnDestroy(): void;
    OnInspectorGUI(): void;
    OnSceneGUI(): void;
    ApplyAndImport(): void;
    // properties
    // fields
  }
}
