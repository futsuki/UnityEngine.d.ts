declare namespace UnityEditor {
  class InternalMeshUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static GetPrimitiveCount(mesh: any): number;
    static CalcTriangleCount(mesh: any): number;
    static HasNormals(mesh: any): boolean;
    static GetVertexFormat(mesh: any): string;
    static GetCachedMeshSurfaceArea(meshRenderer: any): number;
    static GetCachedSkinnedMeshSurfaceArea(skinnedMeshRenderer: any): number;
    // properties
    // fields
  }
}
