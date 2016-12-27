declare namespace UnityEngine.Networking.Match {
  class MatchDesc extends UnityEngine.Networking.Match.ResponseBase {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    name: string;
    averageEloScore: number;
    maxSize: number;
    currentSize: number;
    isPrivate: boolean;
    matchAttributes: any;
    hostNodeId: UnityEngine.Networking.Types.NodeID;
    directConnectInfos: UnityEngine.Networking.Match.MatchDirectConnectInfo[];
    // fields
  }
}
