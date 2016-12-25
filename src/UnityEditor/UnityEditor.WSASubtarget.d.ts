declare namespace UnityEditor {
  class WSASubtarget {
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
    static AnyDevice: UnityEditor.WSASubtarget;
    static PC: UnityEditor.WSASubtarget;
    static Mobile: UnityEditor.WSASubtarget;
    static HoloLens: UnityEditor.WSASubtarget;
  }
}
