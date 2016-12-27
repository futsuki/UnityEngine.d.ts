declare namespace UnityEditor {
  class AudioClipInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    OnDisable(): void;
    OnEnable(): void;
    OnDestroy(): void;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnPreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    // properties
    // fields
  }
}
