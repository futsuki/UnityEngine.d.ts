declare namespace UnityEngine.Networking.Match {
  class MatchInfo extends System.Object {
    // constructors
    constructor();
    // methods
    ToString(): string;
    // properties
    readonly address: string;
    readonly port: number;
    readonly domain: number;
    readonly networkId: UnityEngine.Networking.Types.NetworkID;
    readonly accessToken: UnityEngine.Networking.Types.NetworkAccessToken;
    readonly nodeId: UnityEngine.Networking.Types.NodeID;
    readonly usingRelay: boolean;
    // fields
  }
}
