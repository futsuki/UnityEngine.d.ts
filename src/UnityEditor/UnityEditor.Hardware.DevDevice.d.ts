declare namespace UnityEditor.Hardware {
  class DevDevice {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly isConnected: boolean;
    static readonly none: UnityEditor.Hardware.DevDevice;
    // fields
    id: string;
    name: string;
    type: string;
    module: string;
    state: UnityEditor.Hardware.DevDeviceState;
    features: UnityEditor.Hardware.DevDeviceFeatures;
  }
}
