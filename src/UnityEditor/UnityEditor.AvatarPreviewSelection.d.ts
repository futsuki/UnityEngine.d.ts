declare namespace UnityEditor {
  class AvatarPreviewSelection {
    // constructors
    constructor();
    // methods
    static SetPreview(type: UnityEditor.ModelImporterAnimationType, go: any): void;
    static GetPreview(type: UnityEditor.ModelImporterAnimationType): any;
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
