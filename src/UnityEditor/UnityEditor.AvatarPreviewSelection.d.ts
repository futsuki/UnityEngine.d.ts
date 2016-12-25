declare namespace UnityEditor {
  class AvatarPreviewSelection {
    // constructors
    constructor();
    // methods
    static SetPreview(type: UnityEditor.ModelImporterAnimationType, go: any): any;
    static GetPreview(type: UnityEditor.ModelImporterAnimationType): any;
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
