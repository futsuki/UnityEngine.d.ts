declare namespace UnityEditor {
  class CubemapPreview extends System.Object {
    // constructors
    constructor();
    // methods
    OnDisable(): void;
    GetMipLevelForRendering(texture: any): number;
    SetIntensity(intensity: number): void;
    OnPreviewSettings(targets: UnityEngine.Object[]): void;
    OnPreviewGUI(t: any, r: any, background: any): void;
    RenderStaticPreview(t: any, width: number, height: number): any;
    // properties
    mipLevel: number;
    // fields
    m_PreviewDir: any;
  }
}
