declare namespace UnityEngine.UI {
  class VertexHelper extends System.Object {
    // constructors
    constructor();
    constructor(m: UnityEngine.Mesh);
    // methods
    Clear(): void;
    PopulateUIVertex(vertex: any, i: number): void;
    SetUIVertex(vertex: UnityEngine.UIVertex, i: number): void;
    FillMesh(mesh: UnityEngine.Mesh): void;
    Dispose(): void;
    AddVert(position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector2, uv1: UnityEngine.Vector2, normal: UnityEngine.Vector3, tangent: UnityEngine.Vector4): void;
    AddVert(position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector2): void;
    AddVert(v: UnityEngine.UIVertex): void;
    AddTriangle(idx0: number, idx1: number, idx2: number): void;
    AddUIVertexQuad(verts: UnityEngine.UIVertex[]): void;
    AddUIVertexStream(verts: UnityEngine.UIVertex[], indices: number[]): void;
    AddUIVertexTriangleStream(verts: UnityEngine.UIVertex[]): void;
    GetUIVertexStream(stream: UnityEngine.UIVertex[]): void;
    // properties
    readonly currentVertCount: number;
    readonly currentIndexCount: number;
    // fields
  }
}
