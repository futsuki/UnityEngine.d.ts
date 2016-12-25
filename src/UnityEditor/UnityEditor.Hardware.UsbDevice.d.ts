declare namespace UnityEditor.Hardware {
  class UsbDevice {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    vendorId: number;
    productId: number;
    revision: number;
    udid: string;
    name: string;
  }
}
