declare namespace UnityEngine.VR.WSA {
  class SurfaceObserver {
    // constructors
    constructor();
    // methods
    SetVolumeAsAxisAlignedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3): void;
    SetVolumeAsSphere(origin: UnityEngine.Vector3, radiusMeters: number): void;
    SetVolumeAsOrientedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): void;
    SetVolumeAsFrustum(planes: UnityEngine.Plane[]): void;
    Update(onSurfaceChanged: ((UnityEngine.VR.WSA.SurfaceId, UnityEngine.VR.WSA.SurfaceChange, UnityEngine.Bounds, any) => void)): void;
    RequestMeshAsync(dataRequest: UnityEngine.VR.WSA.SurfaceData, onDataReady: ((UnityEngine.VR.WSA.SurfaceData, boolean, number) => void)): boolean;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
