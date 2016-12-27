declare namespace UnityEditor {
  class TextureInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    static IsNormalMap(t: any): boolean;
    GetMipLevelForRendering(): number;
    OnInspectorGUI(): void;
    OnPreviewSettings(): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    GetInfoString(): string;
    // properties
    mipLevel: number;
    // fields
  }
}
