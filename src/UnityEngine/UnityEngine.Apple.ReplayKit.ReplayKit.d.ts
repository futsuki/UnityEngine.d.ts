declare namespace UnityEngine.Apple.ReplayKit {
  class ReplayKit {
    // constructors
    private constructor();
    // methods
    static StartRecording(enableMicrophone: boolean, enableCamera: boolean): boolean;
    static StartRecording(enableMicrophone: boolean): boolean;
    static StartRecording(): boolean;
    static StopRecording(): boolean;
    static Preview(): boolean;
    static Discard(): boolean;
    static StartBroadcasting(callback: ((boolean, string) => void), enableMicrophone: boolean, enableCamera: boolean): void;
    static StartBroadcasting(callback: ((boolean, string) => void), enableMicrophone: boolean): void;
    static StartBroadcasting(callback: ((boolean, string) => void)): void;
    static StopBroadcasting(): void;
    static ShowCameraPreviewAt(posX: number, posY: number): boolean;
    static HideCameraPreview(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly APIAvailable: boolean;
    static readonly recordingAvailable: boolean;
    static readonly lastError: string;
    static readonly isRecording: boolean;
    static readonly broadcastingAPIAvailable: boolean;
    static readonly isBroadcasting: boolean;
    static readonly broadcastURL: string;
    static cameraEnabled: boolean;
    static microphoneEnabled: boolean;
    // fields
  }
}
