declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCapture extends System.Object {
    // constructors
    protected constructor();
    // methods
    static CreateAsync(showHolograms: boolean, onCreatedCallback: ((captureObject: UnityEngine.VR.WSA.WebCam.PhotoCapture) => void)): void;
    StartPhotoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, onPhotoModeStartedCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    StopPhotoModeAsync(onPhotoModeStoppedCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    TakePhotoAsync(filename: string, fileOutputFormat: UnityEngine.VR.WSA.WebCam.PhotoCaptureFileOutputFormat, onCapturedPhotoToDiskCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    TakePhotoAsync(onCapturedPhotoToMemoryCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult, photoCaptureFrame: UnityEngine.VR.WSA.WebCam.PhotoCaptureFrame) => void)): void;
    GetUnsafePointerToVideoDeviceController(): any;
    Dispose(): void;
    // properties
    static readonly SupportedResolutions: any;
    // fields
  }
}
