declare namespace UnityEditor {
  class AssetStoreClient {
    // constructors
    constructor();
    // methods
    static LoggedIn(): boolean;
    static LoggedOut(): boolean;
    static LoginError(): boolean;
    static LoginInProgress(): boolean;
    static Logout(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly LoginErrorMessage: string;
    static readonly HasSavedSessionID: boolean;
    static readonly HasActiveSessionID: boolean;
    static RememberSession: boolean;
    // fields
  }
}
