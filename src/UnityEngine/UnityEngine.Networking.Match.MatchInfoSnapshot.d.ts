declare namespace UnityEngine.Networking.Match {
  class MatchInfoSnapshot extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly networkId: UnityEngine.Networking.Types.NetworkID;
    readonly hostNodeId: UnityEngine.Networking.Types.NodeID;
    readonly name: string;
    readonly averageEloScore: number;
    readonly maxSize: number;
    readonly currentSize: number;
    readonly isPrivate: boolean;
    readonly matchAttributes: any;
    readonly directConnectInfos: UnityEngine.Networking.Match.MatchInfoSnapshot.MatchInfoDirectConnectSnapshot[];
    // fields
  }
}
