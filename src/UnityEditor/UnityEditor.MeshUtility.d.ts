declare namespace UnityEditor {
  class MeshUtility {
    // constructors
    constructor();
    // methods
    static SetPerTriangleUV2(src: any, triUV: any[]): any;
    static SetMeshCompression(mesh: any, compression: UnityEditor.ModelImporterMeshCompression): any;
    static GetMeshCompression(mesh: any): UnityEditor.ModelImporterMeshCompression;
    static Optimize(mesh: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
