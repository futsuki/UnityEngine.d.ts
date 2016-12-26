declare namespace UnityEditor {
  class AvatarMappingEditor {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): void;
    Disable(): void;
    OnDestroy(): void;
    OnInspectorGUI(): void;
    static MatchName(transformName: string, boneName: string): boolean;
    OnSceneGUI(): void;
    ApplyAndImport(): void;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}
