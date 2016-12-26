declare namespace UnityEngine.VR {
  class VRSettings {
    // constructors
    private constructor();
    // methods
    static LoadDeviceByName(deviceName: string): void;
    static LoadDeviceByName(prioritizedDeviceNameList: string[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static enabled: boolean;
    static readonly isDeviceActive: boolean;
    static showDeviceView: boolean;
    static renderScale: number;
    static readonly eyeTextureWidth: number;
    static readonly eyeTextureHeight: number;
    static renderViewportScale: number;
    static loadedDevice: UnityEngine.VR.VRDeviceType;
    static readonly loadedDeviceName: string;
    static readonly supportedDevices: string[];
    // fields
  }
}
