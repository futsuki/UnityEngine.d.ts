declare namespace UnityEditor {
  class WSASDK {
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
    static SDK80: UnityEditor.WSASDK;
    static SDK81: UnityEditor.WSASDK;
    static PhoneSDK81: UnityEditor.WSASDK;
    static UniversalSDK81: UnityEditor.WSASDK;
    static UWP: UnityEditor.WSASDK;
  }
}
