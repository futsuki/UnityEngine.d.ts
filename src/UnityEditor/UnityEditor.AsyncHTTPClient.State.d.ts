declare namespace UnityEditor.AsyncHTTPClient {
  class State {
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
    static INIT: UnityEditor.AsyncHTTPClient.State;
    static CONNECTING: UnityEditor.AsyncHTTPClient.State;
    static CONNECTED: UnityEditor.AsyncHTTPClient.State;
    static UPLOADING: UnityEditor.AsyncHTTPClient.State;
    static DOWNLOADING: UnityEditor.AsyncHTTPClient.State;
    static CONFIRMING: UnityEditor.AsyncHTTPClient.State;
    static DONE_OK: UnityEditor.AsyncHTTPClient.State;
    static DONE_FAILED: UnityEditor.AsyncHTTPClient.State;
    static ABORTED: UnityEditor.AsyncHTTPClient.State;
    static TIMEOUT: UnityEditor.AsyncHTTPClient.State;
  }
}
