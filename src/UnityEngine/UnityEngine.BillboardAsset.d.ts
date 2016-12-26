declare namespace UnityEngine {
  class BillboardAsset {
    // constructors
    constructor();
    // methods
    GetImageTexCoords(imageTexCoords: any): void;
    GetImageTexCoords(): UnityEngine.Vector4[];
    SetImageTexCoords(imageTexCoords: any): void;
    SetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    GetVertices(vertices: any): void;
    GetVertices(): UnityEngine.Vector2[];
    SetVertices(vertices: any): void;
    SetVertices(vertices: UnityEngine.Vector2[]): void;
    GetIndices(indices: any): void;
    GetIndices(): number[];
    SetIndices(indices: any): void;
    SetIndices(indices: number[]): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    width: number;
    height: number;
    bottom: number;
    readonly imageCount: number;
    readonly vertexCount: number;
    readonly indexCount: number;
    material: UnityEngine.Material;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
