declare namespace UnityEditor {
  class SpriteInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    static BuildPreviewTexture(width: number, height: number, sprite: any, spriteRendererMaterial: any, isPolygon: boolean): any;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    static DrawPreview(r: any, frame: any, spriteRendererMaterial: any, isPolygon: boolean): void;
    DrawPreview(previewArea: any): void;
    GetInfoString(): string;
    // properties
    // fields
  }
}
