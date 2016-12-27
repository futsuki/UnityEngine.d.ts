declare namespace UnityEditor {
  class ModelInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnPreviewSettings(): void;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    OnDestroy(): void;
    GetInfoString(): string;
    // properties
    // fields
    previewDir: any;
  }
}
