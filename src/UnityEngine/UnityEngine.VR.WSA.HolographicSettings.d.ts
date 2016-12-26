declare namespace UnityEngine.VR.WSA {
  class HolographicSettings {
    // constructors
    constructor();
    // methods
    static SetFocusPointForFrame(position: UnityEngine.Vector3): void;
    static SetFocusPointForFrame(position: UnityEngine.Vector3, normal: UnityEngine.Vector3): void;
    static SetFocusPointForFrame(position: UnityEngine.Vector3, normal: UnityEngine.Vector3, velocity: UnityEngine.Vector3): void;
    static ActivateLatentFramePresentation(activated: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly IsLatentFramePresentation: boolean;
    // fields
  }
}
