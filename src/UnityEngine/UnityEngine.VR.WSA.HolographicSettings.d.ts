declare namespace UnityEngine.VR.WSA {
  class HolographicSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static SetFocusPointForFrame(position: UnityEngine.Vector3): void;
    static SetFocusPointForFrame(position: UnityEngine.Vector3, normal: UnityEngine.Vector3): void;
    static SetFocusPointForFrame(position: UnityEngine.Vector3, normal: UnityEngine.Vector3, velocity: UnityEngine.Vector3): void;
    static ActivateLatentFramePresentation(activated: boolean): void;
    // properties
    static readonly IsLatentFramePresentation: boolean;
    // fields
  }
}
