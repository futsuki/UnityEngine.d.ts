declare namespace UnityEditor {
  class AvatarMappingEditor {
    // constructors
    constructor();
    // methods
    Enable(inspector: UnityEditor.AvatarEditor): any;
    Disable(): any;
    OnDestroy(): any;
    OnInspectorGUI(): any;
    static MatchName(transformName: string, boneName: string): boolean;
    OnSceneGUI(): any;
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
