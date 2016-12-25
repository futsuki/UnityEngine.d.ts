declare namespace UnityEngine.VR.WSA.WebCam.PhotoCapture {
  class OnCaptureResourceCreatedCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(captureObject: UnityEngine.VR.WSA.WebCam.PhotoCapture): any;
    BeginInvoke(captureObject: UnityEngine.VR.WSA.WebCam.PhotoCapture, callback: any, object: any): any;
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
