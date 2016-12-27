declare namespace UnityEditor {
  class AvatarEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): void;
    OnSceneGUI(): void;
    Update(): void;
    HasFrameBounds(): boolean;
    OnGetFrameBounds(): any;
    // properties
    readonly prefab: any;
    // fields
  }
}
