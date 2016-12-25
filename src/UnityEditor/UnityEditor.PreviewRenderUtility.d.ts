declare namespace UnityEditor {
  class PreviewRenderUtility {
    // constructors
    constructor();
    constructor(renderFullScene: boolean);
    // methods
    Cleanup(): any;
    GetScaleFactor(width: number, height: number): number;
    BeginStaticPreview(r: any): any;
    BeginStaticPreviewHDR(r: any): any;
    BeginPreview(r: any, previewBackground: any): any;
    BeginPreviewHDR(r: any, previewBackground: any): any;
    EndPreview(): any;
    EndAndDrawPreview(r: any): any;
    EndStaticPreview(): any;
    DrawMesh(mesh: any, pos: any, rot: any, mat: any, subMeshIndex: number): any;
    DrawMesh(mesh: any, matrix: any, mat: any, subMeshIndex: number): any;
    DrawMesh(mesh: any, pos: any, rot: any, mat: any, subMeshIndex: number, customProperties: any): any;
    DrawMesh(mesh: any, pos: any, rot: any, mat: any, subMeshIndex: number, customProperties: any, probeAnchor: any): any;
    DrawMesh(mesh: any, matrix: any, mat: any, subMeshIndex: number, customProperties: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Camera: any;
    m_CameraFieldOfView: number;
    m_Light: any[];
  }
}
