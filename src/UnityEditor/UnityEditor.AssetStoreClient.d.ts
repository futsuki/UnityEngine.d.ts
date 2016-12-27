declare namespace UnityEditor {
  class AssetStoreClient extends System.Object {
    // constructors
    constructor();
    // methods
    static LoggedIn(): boolean;
    static LoggedOut(): boolean;
    static LoginError(): boolean;
    static LoginInProgress(): boolean;
    static Logout(): void;
    // properties
    static readonly LoginErrorMessage: string;
    static readonly HasSavedSessionID: boolean;
    static readonly HasActiveSessionID: boolean;
    static RememberSession: boolean;
    // fields
  }
}
