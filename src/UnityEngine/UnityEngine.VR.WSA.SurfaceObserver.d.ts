declare namespace UnityEngine.VR.WSA {
  class SurfaceObserver {
    // constructors
    constructor();
    // methods
    SetVolumeAsAxisAlignedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3): any;
    SetVolumeAsSphere(origin: UnityEngine.Vector3, radiusMeters: number): any;
    SetVolumeAsOrientedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): any;
    SetVolumeAsFrustum(planes: UnityEngine.Plane[]): any;
    Update(onSurfaceChanged: UnityEngine.VR.WSA.SurfaceObserver.SurfaceChangedDelegate): any;
    RequestMeshAsync(dataRequest: UnityEngine.VR.WSA.SurfaceData, onDataReady: UnityEngine.VR.WSA.SurfaceObserver.SurfaceDataReadyDelegate): boolean;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
