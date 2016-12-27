declare namespace UnityEditor {
  class Texture3DInspector extends UnityEditor.TextureInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    GetInfoString(): string;
    OnPreviewSettings(): void;
    OnPreviewGUI(r: any, background: any): void;
    // properties
    // fields
    m_PreviewDir: any;
  }
}
