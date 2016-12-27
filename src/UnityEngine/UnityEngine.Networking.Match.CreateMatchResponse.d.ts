declare namespace UnityEngine.Networking.Match {
  class CreateMatchResponse extends UnityEngine.Networking.Match.BasicResponse {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    address: string;
    port: number;
    domain: number;
    networkId: UnityEngine.Networking.Types.NetworkID;
    accessTokenString: string;
    nodeId: UnityEngine.Networking.Types.NodeID;
    usingRelay: boolean;
    // fields
  }
}
