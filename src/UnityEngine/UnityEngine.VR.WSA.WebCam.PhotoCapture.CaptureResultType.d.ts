declare namespace UnityEngine.VR.WSA.WebCam.PhotoCapture {
  class CaptureResultType {
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
    static Success: UnityEngine.VR.WSA.WebCam.PhotoCapture.CaptureResultType;
    static UnknownError: UnityEngine.VR.WSA.WebCam.PhotoCapture.CaptureResultType;
  }
}
