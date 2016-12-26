declare namespace UnityEngine.VR.WSA.WebCam.VideoCapture {
  class OnStoppedRecordingVideoCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult): void;
    BeginInvoke(result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
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
