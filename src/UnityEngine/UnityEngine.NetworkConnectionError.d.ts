declare namespace UnityEngine {
  class NetworkConnectionError {
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
    static NoError: UnityEngine.NetworkConnectionError;
    static RSAPublicKeyMismatch: UnityEngine.NetworkConnectionError;
    static InvalidPassword: UnityEngine.NetworkConnectionError;
    static ConnectionFailed: UnityEngine.NetworkConnectionError;
    static TooManyConnectedPlayers: UnityEngine.NetworkConnectionError;
    static ConnectionBanned: UnityEngine.NetworkConnectionError;
    static AlreadyConnectedToServer: UnityEngine.NetworkConnectionError;
    static AlreadyConnectedToAnotherServer: UnityEngine.NetworkConnectionError;
    static CreateSocketOrThreadFailure: UnityEngine.NetworkConnectionError;
    static IncorrectParameters: UnityEngine.NetworkConnectionError;
    static EmptyConnectTarget: UnityEngine.NetworkConnectionError;
    static InternalDirectConnectFailed: UnityEngine.NetworkConnectionError;
    static NATTargetNotConnected: UnityEngine.NetworkConnectionError;
    static NATTargetConnectionLost: UnityEngine.NetworkConnectionError;
    static NATPunchthroughFailed: UnityEngine.NetworkConnectionError;
  }
}
