declare namespace UnityEditor {
  class CubemapPreview {
    // constructors
    constructor();
    // methods
    OnDisable(): any;
    GetMipLevelForRendering(texture: any): number;
    SetIntensity(intensity: number): any;
    OnPreviewSettings(targets: any[]): any;
    OnPreviewGUI(t: any, r: any, background: any): any;
    RenderStaticPreview(t: any, width: number, height: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    mipLevel: number;
    // fields
    m_PreviewDir: any;
  }
}
