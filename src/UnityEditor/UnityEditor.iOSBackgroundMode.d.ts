declare namespace UnityEditor {
  class iOSBackgroundMode {
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
    static None: UnityEditor.iOSBackgroundMode;
    static Audio: UnityEditor.iOSBackgroundMode;
    static Location: UnityEditor.iOSBackgroundMode;
    static VOIP: UnityEditor.iOSBackgroundMode;
    static NewsstandContent: UnityEditor.iOSBackgroundMode;
    static ExternalAccessory: UnityEditor.iOSBackgroundMode;
    static BluetoothCentral: UnityEditor.iOSBackgroundMode;
    static BluetoothPeripheral: UnityEditor.iOSBackgroundMode;
    static Fetch: UnityEditor.iOSBackgroundMode;
    static RemoteNotification: UnityEditor.iOSBackgroundMode;
  }
}
