declare namespace UnityEditor.Hardware {
  class DevDeviceList {
    // constructors
    constructor();
    // methods
    static OnChanged(): void;
    static FindDevice(deviceId: string, device: any): boolean;
    static GetDevices(): UnityEditor.Hardware.DevDevice[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
