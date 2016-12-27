declare namespace UnityEditor {
  class AvatarMappingEditor extends UnityEditor.AvatarSubEditor {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): void;
    Disable(): void;
    OnDestroy(): void;
    OnInspectorGUI(): void;
    static MatchName(transformName: string, boneName: string): boolean;
    OnSceneGUI(): void;
    // properties
    // fields
  }
}
