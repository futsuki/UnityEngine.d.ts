declare namespace UnityEngine.Networking.Match {
  class MatchInfo {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
