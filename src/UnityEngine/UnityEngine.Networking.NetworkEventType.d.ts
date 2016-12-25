declare namespace UnityEngine.Networking {
  class NetworkEventType {
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
    static DataEvent: UnityEngine.Networking.NetworkEventType;
    static ConnectEvent: UnityEngine.Networking.NetworkEventType;
    static DisconnectEvent: UnityEngine.Networking.NetworkEventType;
    static Nothing: UnityEngine.Networking.NetworkEventType;
    static BroadcastEvent: UnityEngine.Networking.NetworkEventType;
  }
}
