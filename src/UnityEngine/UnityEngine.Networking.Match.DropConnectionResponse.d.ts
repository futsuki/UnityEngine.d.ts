declare namespace UnityEngine.Networking.Match {
  class DropConnectionResponse extends UnityEngine.Networking.Match.Response {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    nodeId: UnityEngine.Networking.Types.NodeID;
    // fields
  }
}
