declare namespace UnityEngine.Networking {
  class NetworkError {
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
    static Ok: UnityEngine.Networking.NetworkError;
    static WrongHost: UnityEngine.Networking.NetworkError;
    static WrongConnection: UnityEngine.Networking.NetworkError;
    static WrongChannel: UnityEngine.Networking.NetworkError;
    static NoResources: UnityEngine.Networking.NetworkError;
    static BadMessage: UnityEngine.Networking.NetworkError;
    static Timeout: UnityEngine.Networking.NetworkError;
    static MessageToLong: UnityEngine.Networking.NetworkError;
    static WrongOperation: UnityEngine.Networking.NetworkError;
    static VersionMismatch: UnityEngine.Networking.NetworkError;
    static CRCMismatch: UnityEngine.Networking.NetworkError;
    static DNSFailure: UnityEngine.Networking.NetworkError;
  }
}
