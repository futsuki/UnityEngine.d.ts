declare namespace UnityEngine.VR.WSA {
  class SurfaceObserver extends System.Object {
    // constructors
    constructor();
    // methods
    SetVolumeAsAxisAlignedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3): void;
    SetVolumeAsSphere(origin: UnityEngine.Vector3, radiusMeters: number): void;
    SetVolumeAsOrientedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): void;
    SetVolumeAsFrustum(planes: UnityEngine.Plane[]): void;
    Update(onSurfaceChanged: ((surfaceId: UnityEngine.VR.WSA.SurfaceId, changeType: UnityEngine.VR.WSA.SurfaceChange, bounds: UnityEngine.Bounds, updateTime: any) => void)): void;
    RequestMeshAsync(dataRequest: UnityEngine.VR.WSA.SurfaceData, onDataReady: ((bakedData: UnityEngine.VR.WSA.SurfaceData, outputWritten: boolean, elapsedBakeTimeSeconds: number) => void)): boolean;
    Dispose(): void;
    // properties
    // fields
  }
}
