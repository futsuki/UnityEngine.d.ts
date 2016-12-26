declare namespace UnityEditor {
  class CubemapPreview {
    // constructors
    constructor();
    // methods
    OnDisable(): void;
    GetMipLevelForRendering(texture: any): number;
    SetIntensity(intensity: number): void;
    OnPreviewSettings(targets: any[]): void;
    OnPreviewGUI(t: any, r: any, background: any): void;
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
