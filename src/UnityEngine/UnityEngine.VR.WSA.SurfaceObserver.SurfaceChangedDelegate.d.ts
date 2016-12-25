declare namespace UnityEngine.VR.WSA.SurfaceObserver {
  class SurfaceChangedDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(surfaceId: UnityEngine.VR.WSA.SurfaceId, changeType: UnityEngine.VR.WSA.SurfaceChange, bounds: UnityEngine.Bounds, updateTime: any): any;
    BeginInvoke(surfaceId: UnityEngine.VR.WSA.SurfaceId, changeType: UnityEngine.VR.WSA.SurfaceChange, bounds: UnityEngine.Bounds, updateTime: any, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
