declare namespace UnityEditor {
  class WebCamTextureInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnPreviewGUI(r: any, background: any): void;
    OnDisable(): void;
    GetInfoString(): string;
    // properties
    // fields
  }
}
