declare namespace UnityEditor.Collaboration {
  class CollabInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly ready: boolean;
    readonly update: boolean;
    readonly publish: boolean;
    readonly inProgress: boolean;
    readonly error: boolean;
    readonly maintenance: boolean;
    readonly conflict: boolean;
    readonly whitelisted: boolean;
    readonly dirty: boolean;
    readonly refresh: boolean;
    readonly tip: string;
    readonly lastErrorMsg: string;
    // fields
  }
}
