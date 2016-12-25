declare namespace UnityEngine.VR {
  class VRNode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static LeftEye: UnityEngine.VR.VRNode;
    static RightEye: UnityEngine.VR.VRNode;
    static CenterEye: UnityEngine.VR.VRNode;
    static Head: UnityEngine.VR.VRNode;
    static LeftHand: UnityEngine.VR.VRNode;
    static RightHand: UnityEngine.VR.VRNode;
  }
}
