declare namespace UnityEngine {
  class Mesh {
    // constructors
    constructor();
    // methods
    Clear(keepVertexLayout: boolean): any;
    Clear(): any;
    SetTriangles(triangles: number[], submesh: number): any;
    SetTriangles(triangles: number[], submesh: number, calculateBounds: boolean): any;
    SetTriangles(triangles: any, submesh: number): any;
    SetTriangles(triangles: any, submesh: number, calculateBounds: boolean): any;
    SetIndices(indices: number[], topology: UnityEngine.MeshTopology, submesh: number): any;
    SetIndices(indices: number[], topology: UnityEngine.MeshTopology, submesh: number, calculateBounds: boolean): any;
    ClearBlendShapes(): any;
    GetBlendShapeName(shapeIndex: number): string;
    GetBlendShapeFrameCount(shapeIndex: number): number;
    GetBlendShapeFrameWeight(shapeIndex: number, frameIndex: number): number;
    GetBlendShapeFrameVertices(shapeIndex: number, frameIndex: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]): any;
    AddBlendShapeFrame(shapeName: string, frameWeight: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]): any;
    GetNativeVertexBufferPtr(bufferIndex: number): any;
    GetNativeIndexBufferPtr(): any;
    RecalculateBounds(): any;
    RecalculateNormals(): any;
    Optimize(): any;
    GetTopology(submesh: number): UnityEngine.MeshTopology;
    CombineMeshes(combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean, useMatrices: boolean): any;
    CombineMeshes(combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean): any;
    CombineMeshes(combine: UnityEngine.CombineInstance[]): any;
    MarkDynamic(): any;
    UploadMeshData(markNoLogerReadable: boolean): any;
    GetBlendShapeIndex(blendShapeName: string): number;
    SetVertices(inVertices: any): any;
    SetNormals(inNormals: any): any;
    SetTangents(inTangents: any): any;
    SetColors(inColors: any): any;
    SetColors(inColors: any): any;
    SetUVs(channel: number, uvs: any): any;
    SetUVs(channel: number, uvs: any): any;
    SetUVs(channel: number, uvs: any): any;
    GetUVs(channel: number, uvs: any): any;
    GetUVs(channel: number, uvs: any): any;
    GetUVs(channel: number, uvs: any): any;
    GetTriangles(submesh: number): number[];
    GetIndices(submesh: number): number[];
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly isReadable: boolean;
    readonly blendShapeCount: number;
    readonly vertexBufferCount: number;
    bounds: UnityEngine.Bounds;
    readonly vertexCount: number;
    subMeshCount: number;
    boneWeights: UnityEngine.BoneWeight[];
    bindposes: UnityEngine.Matrix4x4[];
    uv1: UnityEngine.Vector2[];
    vertices: UnityEngine.Vector3[];
    normals: UnityEngine.Vector3[];
    tangents: UnityEngine.Vector4[];
    uv: UnityEngine.Vector2[];
    uv2: UnityEngine.Vector2[];
    uv3: UnityEngine.Vector2[];
    uv4: UnityEngine.Vector2[];
    colors: UnityEngine.Color[];
    colors32: UnityEngine.Color32[];
    triangles: number[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
