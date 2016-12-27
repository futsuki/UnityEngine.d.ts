declare namespace UnityEngine {
  class BillboardAsset extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    GetImageTexCoords(): UnityEngine.Vector4[];
    SetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    SetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    GetVertices(vertices: UnityEngine.Vector2[]): void;
    GetVertices(): UnityEngine.Vector2[];
    SetVertices(vertices: UnityEngine.Vector2[]): void;
    SetVertices(vertices: UnityEngine.Vector2[]): void;
    GetIndices(indices: number[]): void;
    GetIndices(): number[];
    SetIndices(indices: number[]): void;
    SetIndices(indices: number[]): void;
    // properties
    width: number;
    height: number;
    bottom: number;
    readonly imageCount: number;
    readonly vertexCount: number;
    readonly indexCount: number;
    material: UnityEngine.Material;
    // fields
  }
}
