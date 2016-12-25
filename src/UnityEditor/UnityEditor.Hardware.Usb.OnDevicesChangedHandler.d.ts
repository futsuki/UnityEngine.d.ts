declare namespace UnityEditor.Hardware.Usb {
  class OnDevicesChangedHandler {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(devices: UnityEditor.Hardware.UsbDevice[]): any;
    BeginInvoke(devices: UnityEditor.Hardware.UsbDevice[], callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
