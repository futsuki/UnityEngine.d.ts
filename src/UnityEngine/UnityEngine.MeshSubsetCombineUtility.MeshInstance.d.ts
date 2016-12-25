declare namespace UnityEngine.MeshSubsetCombineUtility {
  class MeshInstance {
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
    rendererInstanceID: number;
    additionalVertexStreamsMeshInstanceID: number;
    transform: UnityEngine.Matrix4x4;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
  }
}
