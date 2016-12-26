declare namespace UnityEngine.VR.WSA.Input {
  class GestureRecognizer {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
