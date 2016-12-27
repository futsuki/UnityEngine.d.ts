declare namespace UnityEngine.Networking.Match {
  class DropConnectionRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    nodeId: UnityEngine.Networking.Types.NodeID;
    // fields
  }
}
