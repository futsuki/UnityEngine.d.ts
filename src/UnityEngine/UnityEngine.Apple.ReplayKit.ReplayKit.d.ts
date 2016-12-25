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
    static StartBroadcasting(callback: UnityEngine.Apple.ReplayKit.ReplayKit.BroadcastStatusCallback, enableMicrophone: boolean, enableCamera: boolean): any;
    static StartBroadcasting(callback: UnityEngine.Apple.ReplayKit.ReplayKit.BroadcastStatusCallback, enableMicrophone: boolean): any;
    static StartBroadcasting(callback: UnityEngine.Apple.ReplayKit.ReplayKit.BroadcastStatusCallback): any;
    static StopBroadcasting(): any;
    static ShowCameraPreviewAt(posX: number, posY: number): boolean;
    static HideCameraPreview(): any;
    // properties
    // fields
  }
}
