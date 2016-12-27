declare namespace UnityEngine {
  class NetworkConnectionError extends System.Enum {
    // constructors
    protected constructor();
    // methods
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
