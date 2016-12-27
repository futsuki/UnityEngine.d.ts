declare namespace UnityEngine {
  class NetworkViewID extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    // properties
    static readonly unassigned: UnityEngine.NetworkViewID;
    readonly isMine: boolean;
    readonly owner: UnityEngine.NetworkPlayer;
    // fields
  }
}
