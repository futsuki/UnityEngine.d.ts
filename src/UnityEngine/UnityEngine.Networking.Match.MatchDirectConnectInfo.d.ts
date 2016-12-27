declare namespace UnityEngine.Networking.Match {
  class MatchDirectConnectInfo extends UnityEngine.Networking.Match.ResponseBase {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    nodeId: UnityEngine.Networking.Types.NodeID;
    publicAddress: string;
    privateAddress: string;
    hostPriority: UnityEngine.Networking.Types.HostPriority;
    // fields
  }
}
