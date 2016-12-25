declare namespace UnityEditor.Connect {
  class ConnectInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly initialized: boolean;
    readonly ready: boolean;
    readonly online: boolean;
    readonly loggedIn: boolean;
    readonly workOffline: boolean;
    readonly showLoginWindow: boolean;
    readonly error: boolean;
    readonly lastErrorMsg: string;
    readonly maintenance: boolean;
    // fields
  }
}
