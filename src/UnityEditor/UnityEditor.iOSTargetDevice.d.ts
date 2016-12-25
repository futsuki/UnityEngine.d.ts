declare namespace UnityEditor {
  class iOSTargetDevice {
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
    static iPhoneOnly: UnityEditor.iOSTargetDevice;
    static iPadOnly: UnityEditor.iOSTargetDevice;
    static iPhoneAndiPad: UnityEditor.iOSTargetDevice;
  }
}
