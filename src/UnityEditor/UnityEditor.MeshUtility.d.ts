declare namespace UnityEditor {
  class MeshUtility {
    // constructors
    constructor();
    // methods
    static SetPerTriangleUV2(src: any, triUV: any[]): void;
    static SetMeshCompression(mesh: any, compression: UnityEditor.ModelImporterMeshCompression): void;
    static GetMeshCompression(mesh: any): UnityEditor.ModelImporterMeshCompression;
    static Optimize(mesh: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
