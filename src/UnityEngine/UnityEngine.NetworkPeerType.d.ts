declare namespace UnityEngine {
  class NetworkPeerType {
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
    static Disconnected: UnityEngine.NetworkPeerType;
    static Server: UnityEngine.NetworkPeerType;
    static Client: UnityEngine.NetworkPeerType;
    static Connecting: UnityEngine.NetworkPeerType;
  }
}
