declare namespace UnityEngine.Networking.Match {
  class SetMatchAttributesRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    isListed: boolean;
    // fields
  }
}
