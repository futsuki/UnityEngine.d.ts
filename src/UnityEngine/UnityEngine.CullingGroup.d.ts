declare namespace UnityEngine {
  class CullingGroup extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    SetBoundingSpheres(array: UnityEngine.BoundingSphere[]): void;
    SetBoundingSphereCount(count: number): void;
    EraseSwapBack(index: number): void;
    QueryIndices(visible: boolean, result: number[], firstIndex: number): number;
    QueryIndices(distanceIndex: number, result: number[], firstIndex: number): number;
    QueryIndices(visible: boolean, distanceIndex: number, result: number[], firstIndex: number): number;
    IsVisible(index: number): boolean;
    GetDistance(index: number): number;
    SetBoundingDistances(distances: number[]): void;
    SetDistanceReferencePoint(point: UnityEngine.Vector3): void;
    SetDistanceReferencePoint(transform: UnityEngine.Transform): void;
    // properties
    onStateChanged: ((sphere: UnityEngine.CullingGroupEvent) => void);
    enabled: boolean;
    targetCamera: UnityEngine.Camera;
    // fields
  }
}
