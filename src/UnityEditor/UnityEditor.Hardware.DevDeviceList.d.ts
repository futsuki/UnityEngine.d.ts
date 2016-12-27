declare namespace UnityEditor.Hardware {
  class DevDeviceList extends System.Object {
    // constructors
    constructor();
    // methods
    static OnChanged(): void;
    static FindDevice(deviceId: string, device: any): boolean;
    static GetDevices(): UnityEditor.Hardware.DevDevice[];
    // properties
    // fields
  }
}
