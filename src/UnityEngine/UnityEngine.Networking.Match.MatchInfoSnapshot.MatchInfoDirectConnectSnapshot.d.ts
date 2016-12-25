declare namespace UnityEngine.Networking.Match.MatchInfoSnapshot {
  class MatchInfoDirectConnectSnapshot {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly nodeId: UnityEngine.Networking.Types.NodeID;
    readonly publicAddress: string;
    readonly privateAddress: string;
    readonly hostPriority: UnityEngine.Networking.Types.HostPriority;
    // fields
  }
}
