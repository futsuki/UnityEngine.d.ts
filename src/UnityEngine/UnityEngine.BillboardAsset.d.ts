declare namespace UnityEngine {
  class BillboardAsset {
    // constructors
    constructor();
    // methods
    GetImageTexCoords(imageTexCoords: any): any;
    GetImageTexCoords(): UnityEngine.Vector4[];
    SetImageTexCoords(imageTexCoords: any): any;
    SetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): any;
    GetVertices(vertices: any): any;
    GetVertices(): UnityEngine.Vector2[];
    SetVertices(vertices: any): any;
    SetVertices(vertices: UnityEngine.Vector2[]): any;
    GetIndices(indices: any): any;
    GetIndices(): number[];
    SetIndices(indices: any): any;
    SetIndices(indices: number[]): any;
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
