declare namespace UnityEditor {
  class InternalMeshUtil {
    // constructors
    constructor();
    // methods
    static GetPrimitiveCount(mesh: any): number;
    static CalcTriangleCount(mesh: any): number;
    static HasNormals(mesh: any): boolean;
    static GetVertexFormat(mesh: any): string;
    static GetCachedMeshSurfaceArea(meshRenderer: any): number;
    static GetCachedSkinnedMeshSurfaceArea(skinnedMeshRenderer: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
