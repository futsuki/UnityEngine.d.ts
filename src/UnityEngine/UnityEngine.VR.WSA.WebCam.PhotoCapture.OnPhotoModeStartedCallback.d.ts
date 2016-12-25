declare namespace UnityEngine.VR.WSA.WebCam.PhotoCapture {
  class OnPhotoModeStartedCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult): any;
    BeginInvoke(result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult, callback: any, object: any): any;
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
