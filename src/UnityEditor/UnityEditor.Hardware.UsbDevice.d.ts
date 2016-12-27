declare namespace UnityEditor.Hardware {
  class UsbDevice extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ToString(): string;
    // properties
    // fields
    vendorId: number;
    productId: number;
    revision: number;
    udid: string;
    name: string;
  }
}
