declare namespace UnityEditor.Hardware {
  class DevDevice extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ToString(): string;
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
