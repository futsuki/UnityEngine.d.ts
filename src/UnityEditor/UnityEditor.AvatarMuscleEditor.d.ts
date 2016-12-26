declare namespace UnityEditor {
  class AvatarMuscleEditor {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): void;
    OnInspectorGUI(): void;
    DrawMuscleHandle(t: any, humanId: number): void;
    OnSceneGUI(): void;
    Disable(): void;
    OnDestroy(): void;
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
