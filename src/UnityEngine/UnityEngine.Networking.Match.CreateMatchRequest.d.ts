declare namespace UnityEngine.Networking.Match {
  class CreateMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    name: string;
    size: number;
    publicAddress: string;
    privateAddress: string;
    eloScore: number;
    advertise: boolean;
    password: string;
    matchAttributes: any;
    // fields
  }
}
