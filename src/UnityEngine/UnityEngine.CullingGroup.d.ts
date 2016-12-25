declare namespace UnityEngine {
  class CullingGroup {
    // constructors
    constructor();
    // methods
    Dispose(): any;
    SetBoundingSpheres(array: UnityEngine.BoundingSphere[]): any;
    SetBoundingSphereCount(count: number): any;
    EraseSwapBack(index: number): any;
    QueryIndices(visible: boolean, result: number[], firstIndex: number): number;
    QueryIndices(distanceIndex: number, result: number[], firstIndex: number): number;
    QueryIndices(visible: boolean, distanceIndex: number, result: number[], firstIndex: number): number;
    IsVisible(index: number): boolean;
    GetDistance(index: number): number;
    SetBoundingDistances(distances: number[]): any;
    SetDistanceReferencePoint(point: UnityEngine.Vector3): any;
    SetDistanceReferencePoint(transform: UnityEngine.Transform): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    onStateChanged: UnityEngine.CullingGroup.StateChanged;
    enabled: boolean;
    targetCamera: UnityEngine.Camera;
    // fields
  }
}
