declare namespace UnityEditor {
  class AvatarMuscleEditor extends UnityEditor.AvatarSubEditor {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): void;
    OnInspectorGUI(): void;
    DrawMuscleHandle(t: any, humanId: number): void;
    OnSceneGUI(): void;
    // properties
    // fields
  }
}
