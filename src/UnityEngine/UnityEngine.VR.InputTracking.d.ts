declare namespace UnityEngine.VR {
  class InputTracking {
    // constructors
    private constructor();
    // methods
    static GetLocalPosition(node: UnityEngine.VR.VRNode): UnityEngine.Vector3;
    static GetLocalRotation(node: UnityEngine.VR.VRNode): UnityEngine.Quaternion;
    static Recenter(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
