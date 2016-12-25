declare namespace UnityEngine.VR.WSA.WebCam {
  class CapturePixelFormat {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static BGRA32: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    static NV12: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    static JPEG: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    static PNG: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
  }
}
