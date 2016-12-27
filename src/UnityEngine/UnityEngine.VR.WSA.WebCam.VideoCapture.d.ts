declare namespace UnityEngine.VR.WSA.WebCam {
  class VideoCapture extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetSupportedFrameRatesForResolution(resolution: UnityEngine.Resolution): any;
    static CreateAsync(showHolograms: boolean, onCreatedCallback: ((captureObject: UnityEngine.VR.WSA.WebCam.VideoCapture) => void)): void;
    StartVideoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, audioState: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState, onVideoModeStartedCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StopVideoModeAsync(onVideoModeStoppedCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StartRecordingAsync(filename: string, onStartedRecordingVideoCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StopRecordingAsync(onStoppedRecordingVideoCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    GetUnsafePointerToVideoDeviceController(): any;
    Dispose(): void;
    // properties
    static readonly SupportedResolutions: any;
    readonly IsRecording: boolean;
    // fields
  }
}
