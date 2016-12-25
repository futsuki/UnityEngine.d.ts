declare namespace UnityEngine.Networking.UnityWebRequest {
  class UnityWebRequestError {
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
    static OK: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static Unknown: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SDKError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static UnsupportedProtocol: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static MalformattedUrl: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static CannotResolveProxy: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static CannotResolveHost: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static CannotConnectToHost: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static AccessDenied: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static GenericHTTPError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static WriteError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static ReadError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static OutOfMemory: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static Timeout: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static HTTPPostError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCannotConnect: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static Aborted: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static TooManyRedirects: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static ReceivedNoData: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLNotSupported: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static FailedToSendData: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static FailedToReceiveData: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCertificateError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCipherNotAvailable: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCACertError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static UnrecognizedContentEncoding: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static LoginFailed: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLShutdownFailed: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
  }
}
