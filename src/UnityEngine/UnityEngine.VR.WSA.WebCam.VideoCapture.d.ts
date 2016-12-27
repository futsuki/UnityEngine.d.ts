declare namespace UnityEngine.VR.WSA.WebCam {
  class VideoCapture {
    // constructors
    private constructor();
    // methods
    static GetSupportedFrameRatesForResolution(resolution: UnityEngine.Resolution): any;
    static CreateAsync(showHolograms: boolean, onCreatedCallback: ((UnityEngine.VR.WSA.WebCam.VideoCapture) => void)): void;
    StartVideoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, audioState: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState, onVideoModeStartedCallback: ((UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StopVideoModeAsync(onVideoModeStoppedCallback: ((UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StartRecordingAsync(filename: string, onStartedRecordingVideoCallback: ((UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StopRecordingAsync(onStoppedRecordingVideoCallback: ((UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    GetUnsafePointerToVideoDeviceController(): any;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly SupportedResolutions: any;
    readonly IsRecording: boolean;
    // fields
  }
}
