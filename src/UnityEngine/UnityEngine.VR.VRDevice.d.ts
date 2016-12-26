declare namespace UnityEngine.VR {
  class VRDevice {
    // constructors
    private constructor();
    // methods
    static GetNativePtr(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isPresent: boolean;
    static readonly family: string;
    static readonly model: string;
    static readonly refreshRate: number;
    // fields
  }
}
