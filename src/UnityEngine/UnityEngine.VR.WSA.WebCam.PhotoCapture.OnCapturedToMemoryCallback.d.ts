declare namespace UnityEngine.VR.WSA.WebCam.PhotoCapture {
  class OnCapturedToMemoryCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult, photoCaptureFrame: UnityEngine.VR.WSA.WebCam.PhotoCaptureFrame): any;
    BeginInvoke(result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult, photoCaptureFrame: UnityEngine.VR.WSA.WebCam.PhotoCaptureFrame, callback: any, object: any): any;
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
