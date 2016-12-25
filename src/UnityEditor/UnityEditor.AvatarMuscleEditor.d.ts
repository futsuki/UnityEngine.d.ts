declare namespace UnityEditor {
  class AvatarMuscleEditor {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): any;
    OnInspectorGUI(): any;
    DrawMuscleHandle(t: any, humanId: number): any;
    OnSceneGUI(): any;
    Disable(): any;
    OnDestroy(): any;
    ApplyAndImport(): any;
    SetDirty(): any;
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
