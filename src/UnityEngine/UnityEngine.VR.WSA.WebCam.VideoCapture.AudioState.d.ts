declare namespace UnityEngine.VR.WSA.WebCam.VideoCapture {
  class AudioState {
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
    static MicAudio: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
    static ApplicationAudio: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
    static ApplicationAndMicAudio: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
    static None: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
  }
}
