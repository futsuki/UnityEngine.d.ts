declare namespace UnityEngine.VR.WSA.Input {
  class GestureRecognizer extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    SetRecognizableGestures(newMaskValue: UnityEngine.VR.WSA.Input.GestureSettings): UnityEngine.VR.WSA.Input.GestureSettings;
    GetRecognizableGestures(): UnityEngine.VR.WSA.Input.GestureSettings;
    StartCapturingGestures(): void;
    StopCapturingGestures(): void;
    IsCapturingGestures(): boolean;
    CancelGestures(): void;
    // properties
    // fields
  }
}
