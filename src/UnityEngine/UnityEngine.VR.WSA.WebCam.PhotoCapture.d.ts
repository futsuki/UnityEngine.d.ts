declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCapture {
    // constructors
    private constructor();
    // methods
    static CreateAsync(showHolograms: boolean, onCreatedCallback: ((UnityEngine.VR.WSA.WebCam.PhotoCapture) => void)): void;
    StartPhotoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, onPhotoModeStartedCallback: ((UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    StopPhotoModeAsync(onPhotoModeStoppedCallback: ((UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    TakePhotoAsync(filename: string, fileOutputFormat: UnityEngine.VR.WSA.WebCam.PhotoCaptureFileOutputFormat, onCapturedPhotoToDiskCallback: ((UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    TakePhotoAsync(onCapturedPhotoToMemoryCallback: ((UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult, UnityEngine.VR.WSA.WebCam.PhotoCaptureFrame) => void)): void;
    GetUnsafePointerToVideoDeviceController(): any;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly SupportedResolutions: any;
    // fields
  }
}
