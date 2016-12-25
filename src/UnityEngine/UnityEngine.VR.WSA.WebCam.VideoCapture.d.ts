declare namespace UnityEngine.VR.WSA.WebCam {
  class VideoCapture {
    // constructors
    private constructor();
    // methods
    static GetSupportedFrameRatesForResolution(resolution: UnityEngine.Resolution): any;
    static CreateAsync(showHolograms: boolean, onCreatedCallback: UnityEngine.VR.WSA.WebCam.VideoCapture.OnVideoCaptureResourceCreatedCallback): any;
    // properties
    // fields
  }
}
