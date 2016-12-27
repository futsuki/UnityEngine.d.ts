declare namespace UnityEditor {
  class MeshUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static SetPerTriangleUV2(src: any, triUV: any[]): void;
    static SetMeshCompression(mesh: any, compression: UnityEditor.ModelImporterMeshCompression): void;
    static GetMeshCompression(mesh: any): UnityEditor.ModelImporterMeshCompression;
    static Optimize(mesh: any): void;
    // properties
    // fields
  }
}
