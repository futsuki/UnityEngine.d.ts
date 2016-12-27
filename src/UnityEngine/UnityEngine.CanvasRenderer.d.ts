declare namespace UnityEngine {
  class CanvasRenderer extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetColor(color: UnityEngine.Color): void;
    GetColor(): UnityEngine.Color;
    GetAlpha(): number;
    SetAlpha(alpha: number): void;
    SetVertices(vertices: UnityEngine.UIVertex[]): void;
    SetVertices(vertices: UnityEngine.UIVertex[], size: number): void;
    EnableRectClipping(rect: UnityEngine.Rect): void;
    DisableRectClipping(): void;
    SetMaterial(material: UnityEngine.Material, index: number): void;
    SetMaterial(material: UnityEngine.Material, texture: UnityEngine.Texture): void;
    GetMaterial(): UnityEngine.Material;
    GetMaterial(index: number): UnityEngine.Material;
    SetPopMaterial(material: UnityEngine.Material, index: number): void;
    GetPopMaterial(index: number): UnityEngine.Material;
    SetTexture(texture: UnityEngine.Texture): void;
    SetAlphaTexture(texture: UnityEngine.Texture): void;
    SetMesh(mesh: UnityEngine.Mesh): void;
    Clear(): void;
    static SplitUIVertexStreams(verts: UnityEngine.UIVertex[], positions: UnityEngine.Vector3[], colors: UnityEngine.Color32[], uv0S: UnityEngine.Vector2[], uv1S: UnityEngine.Vector2[], normals: UnityEngine.Vector3[], tangents: UnityEngine.Vector4[], indicies: number[]): void;
    static CreateUIVertexStream(verts: UnityEngine.UIVertex[], positions: UnityEngine.Vector3[], colors: UnityEngine.Color32[], uv0S: UnityEngine.Vector2[], uv1S: UnityEngine.Vector2[], normals: UnityEngine.Vector3[], tangents: UnityEngine.Vector4[], indicies: number[]): void;
    static AddUIVertexStream(verts: UnityEngine.UIVertex[], positions: UnityEngine.Vector3[], colors: UnityEngine.Color32[], uv0S: UnityEngine.Vector2[], uv1S: UnityEngine.Vector2[], normals: UnityEngine.Vector3[], tangents: UnityEngine.Vector4[]): void;
    // properties
    isMask: boolean;
    readonly hasRectClipping: boolean;
    hasPopInstruction: boolean;
    materialCount: number;
    popMaterialCount: number;
    readonly relativeDepth: number;
    cull: boolean;
    readonly absoluteDepth: number;
    readonly hasMoved: boolean;
    // fields
  }
}
