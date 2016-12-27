declare namespace UnityEditor {
  class BillboardAssetInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    OnPreviewSettings(): void;
    OnPreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    // properties
    // fields
  }
}
