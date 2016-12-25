declare namespace UnityEngine.VR {
  class VRDeviceType {
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
    static Morpheus: UnityEngine.VR.VRDeviceType;
    static None: UnityEngine.VR.VRDeviceType;
    static Stereo: UnityEngine.VR.VRDeviceType;
    static Split: UnityEngine.VR.VRDeviceType;
    static Oculus: UnityEngine.VR.VRDeviceType;
    static PlayStationVR: UnityEngine.VR.VRDeviceType;
    static Unknown: UnityEngine.VR.VRDeviceType;
  }
}
