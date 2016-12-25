declare namespace UnityEngine.Networking.Match {
  class MatchInfoSnapshot {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly networkId: UnityEngine.Networking.Types.NetworkID;
    readonly hostNodeId: UnityEngine.Networking.Types.NodeID;
    readonly name: string;
    readonly averageEloScore: number;
    readonly maxSize: number;
    readonly currentSize: number;
    readonly isPrivate: boolean;
    readonly matchAttributes: any;
    readonly directConnectInfos: any;
    // fields
  }
}
