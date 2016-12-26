declare namespace UnityEngine {
  class Mesh {
    // constructors
    constructor();
    // methods
    Clear(keepVertexLayout: boolean): void;
    Clear(): void;
    SetTriangles(triangles: number[], submesh: number): void;
    SetTriangles(triangles: number[], submesh: number, calculateBounds: boolean): void;
    SetTriangles(triangles: any, submesh: number): void;
    SetTriangles(triangles: any, submesh: number, calculateBounds: boolean): void;
    SetIndices(indices: number[], topology: UnityEngine.MeshTopology, submesh: number): void;
    SetIndices(indices: number[], topology: UnityEngine.MeshTopology, submesh: number, calculateBounds: boolean): void;
    ClearBlendShapes(): void;
    GetBlendShapeName(shapeIndex: number): string;
    GetBlendShapeFrameCount(shapeIndex: number): number;
    GetBlendShapeFrameWeight(shapeIndex: number, frameIndex: number): number;
    GetBlendShapeFrameVertices(shapeIndex: number, frameIndex: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]): void;
    AddBlendShapeFrame(shapeName: string, frameWeight: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]): void;
    GetNativeVertexBufferPtr(bufferIndex: number): any;
    GetNativeIndexBufferPtr(): any;
    RecalculateBounds(): void;
    RecalculateNormals(): void;
    Optimize(): void;
    GetTopology(submesh: number): UnityEngine.MeshTopology;
    CombineMeshes(combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean, useMatrices: boolean): void;
    CombineMeshes(combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean): void;
    CombineMeshes(combine: UnityEngine.CombineInstance[]): void;
    MarkDynamic(): void;
    UploadMeshData(markNoLogerReadable: boolean): void;
    GetBlendShapeIndex(blendShapeName: string): number;
    SetVertices(inVertices: any): void;
    SetNormals(inNormals: any): void;
    SetTangents(inTangents: any): void;
    SetColors(inColors: any): void;
    SetColors(inColors: any): void;
    SetUVs(channel: number, uvs: any): void;
    SetUVs(channel: number, uvs: any): void;
    SetUVs(channel: number, uvs: any): void;
    GetUVs(channel: number, uvs: any): void;
    GetUVs(channel: number, uvs: any): void;
    GetUVs(channel: number, uvs: any): void;
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
