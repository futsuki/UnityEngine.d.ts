declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCapture {
    // constructors
    private constructor();
    // methods
    static CreateAsync(showHolograms: boolean, onCreatedCallback: UnityEngine.VR.WSA.WebCam.PhotoCapture.OnCaptureResourceCreatedCallback): void;
    StartPhotoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, onPhotoModeStartedCallback: UnityEngine.VR.WSA.WebCam.PhotoCapture.OnPhotoModeStartedCallback): void;
    StopPhotoModeAsync(onPhotoModeStoppedCallback: UnityEngine.VR.WSA.WebCam.PhotoCapture.OnPhotoModeStoppedCallback): void;
    TakePhotoAsync(filename: string, fileOutputFormat: UnityEngine.VR.WSA.WebCam.PhotoCaptureFileOutputFormat, onCapturedPhotoToDiskCallback: UnityEngine.VR.WSA.WebCam.PhotoCapture.OnCapturedToDiskCallback): void;
    TakePhotoAsync(onCapturedPhotoToMemoryCallback: UnityEngine.VR.WSA.WebCam.PhotoCapture.OnCapturedToMemoryCallback): void;
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
