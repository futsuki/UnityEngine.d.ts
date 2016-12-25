declare namespace UnityEditor.AssetStoreClient {
  class LoginState {
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
    static LOGGED_OUT: UnityEditor.AssetStoreClient.LoginState;
    static IN_PROGRESS: UnityEditor.AssetStoreClient.LoginState;
    static LOGGED_IN: UnityEditor.AssetStoreClient.LoginState;
    static LOGIN_ERROR: UnityEditor.AssetStoreClient.LoginState;
  }
}
