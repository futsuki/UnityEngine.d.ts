declare namespace UnityEditor {
  class MovieTextureInspector extends UnityEditor.TextureInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    OnPreviewSettings(): void;
    OnPreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    // properties
    // fields
  }
}
