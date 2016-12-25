declare namespace UnityEngine.VR.WSA.WebCam {
  class WebCamMode {
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
    static None: UnityEngine.VR.WSA.WebCam.WebCamMode;
    static PhotoMode: UnityEngine.VR.WSA.WebCam.WebCamMode;
    static VideoMode: UnityEngine.VR.WSA.WebCam.WebCamMode;
  }
}
