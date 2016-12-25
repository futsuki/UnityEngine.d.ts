declare namespace UnityEngine.VR.WSA.Input {
  class GestureRecognizer {
    // constructors
    constructor();
    // methods
    Dispose(): any;
    SetRecognizableGestures(newMaskValue: UnityEngine.VR.WSA.Input.GestureSettings): UnityEngine.VR.WSA.Input.GestureSettings;
    GetRecognizableGestures(): UnityEngine.VR.WSA.Input.GestureSettings;
    StartCapturingGestures(): any;
    StopCapturingGestures(): any;
    IsCapturingGestures(): boolean;
    CancelGestures(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
