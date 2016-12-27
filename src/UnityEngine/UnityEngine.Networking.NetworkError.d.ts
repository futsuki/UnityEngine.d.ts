declare namespace UnityEngine.Networking {
  class NetworkError extends System.Enum {
    // constructors
    protected constructor();
    // methods
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
