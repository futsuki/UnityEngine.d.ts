declare namespace UnityEngine.Apple.ReplayKit {
  class ReplayKit extends System.Object {
    // constructors
    protected constructor();
    // methods
    static StartRecording(enableMicrophone: boolean, enableCamera: boolean): boolean;
    static StartRecording(enableMicrophone: boolean): boolean;
    static StartRecording(): boolean;
    static StopRecording(): boolean;
    static Preview(): boolean;
    static Discard(): boolean;
    static StartBroadcasting(callback: ((hasStarted: boolean, errorMessage: string) => void), enableMicrophone: boolean, enableCamera: boolean): void;
    static StartBroadcasting(callback: ((hasStarted: boolean, errorMessage: string) => void), enableMicrophone: boolean): void;
    static StartBroadcasting(callback: ((hasStarted: boolean, errorMessage: string) => void)): void;
    static StopBroadcasting(): void;
    static ShowCameraPreviewAt(posX: number, posY: number): boolean;
    static HideCameraPreview(): void;
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
