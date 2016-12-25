declare namespace UnityEngine {
  class NetworkViewID {
    // constructors
    private constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    GetType(): any;
    // properties
    static readonly unassigned: UnityEngine.NetworkViewID;
    readonly isMine: boolean;
    readonly owner: UnityEngine.NetworkPlayer;
    // fields
  }
}
