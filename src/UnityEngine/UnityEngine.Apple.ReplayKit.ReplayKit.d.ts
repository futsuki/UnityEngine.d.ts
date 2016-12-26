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
    static StartBroadcasting(callback: UnityEngine.Apple.ReplayKit.ReplayKit.BroadcastStatusCallback, enableMicrophone: boolean, enableCamera: boolean): void;
    static StartBroadcasting(callback: UnityEngine.Apple.ReplayKit.ReplayKit.BroadcastStatusCallback, enableMicrophone: boolean): void;
    static StartBroadcasting(callback: UnityEngine.Apple.ReplayKit.ReplayKit.BroadcastStatusCallback): void;
    static StopBroadcasting(): void;
    static ShowCameraPreviewAt(posX: number, posY: number): boolean;
    static HideCameraPreview(): void;
    // properties
    // fields
  }
}
