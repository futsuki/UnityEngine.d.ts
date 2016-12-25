declare namespace UnityEngine.Networking.Match {
  class CreateMatchRequest {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    name: string;
    size: number;
    publicAddress: string;
    privateAddress: string;
    eloScore: number;
    advertise: boolean;
    password: string;
    matchAttributes: any;
    version: number;
    sourceId: UnityEngine.Networking.Types.SourceID;
    projectId: string;
    appId: UnityEngine.Networking.Types.AppID;
    accessTokenString: string;
    domain: number;
    // fields
  }
}
