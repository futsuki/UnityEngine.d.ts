declare namespace UnityEditor {
  class LODGroupEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnSceneGUI(): void;
    Update(): void;
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    // properties
    // fields
  }
}
