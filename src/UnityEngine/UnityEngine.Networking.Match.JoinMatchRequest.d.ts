declare namespace UnityEngine.Networking.Match {
  class JoinMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    publicAddress: string;
    privateAddress: string;
    eloScore: number;
    password: string;
    // fields
  }
}
