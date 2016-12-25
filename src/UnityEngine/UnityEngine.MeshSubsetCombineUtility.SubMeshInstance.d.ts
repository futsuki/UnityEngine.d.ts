declare namespace UnityEngine.MeshSubsetCombineUtility {
  class SubMeshInstance {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    meshInstanceID: number;
    vertexOffset: number;
    gameObjectInstanceID: number;
    subMeshIndex: number;
    transform: UnityEngine.Matrix4x4;
  }
}
