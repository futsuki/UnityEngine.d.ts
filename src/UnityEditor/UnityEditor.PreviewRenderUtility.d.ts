declare namespace UnityEditor {
  class PreviewRenderUtility extends System.Object {
    // constructors
    constructor();
    constructor(renderFullScene: boolean);
    // methods
    Cleanup(): void;
    GetScaleFactor(width: number, height: number): number;
    BeginStaticPreview(r: any): void;
    BeginStaticPreviewHDR(r: any): void;
    BeginPreview(r: any, previewBackground: any): void;
    BeginPreviewHDR(r: any, previewBackground: any): void;
    EndPreview(): any;
    EndAndDrawPreview(r: any): void;
    EndStaticPreview(): any;
    DrawMesh(mesh: any, pos: any, rot: any, mat: any, subMeshIndex: number): void;
    DrawMesh(mesh: any, matrix: any, mat: any, subMeshIndex: number): void;
    DrawMesh(mesh: any, pos: any, rot: any, mat: any, subMeshIndex: number, customProperties: any): void;
    DrawMesh(mesh: any, pos: any, rot: any, mat: any, subMeshIndex: number, customProperties: any, probeAnchor: any): void;
    DrawMesh(mesh: any, matrix: any, mat: any, subMeshIndex: number, customProperties: any): void;
    // properties
    // fields
    m_Camera: any;
    m_CameraFieldOfView: number;
    m_Light: any[];
  }
}
