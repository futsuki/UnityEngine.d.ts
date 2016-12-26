declare namespace UnityEngine.Networking.Match {
  class Request {
    // constructors
    private constructor();
    // methods
    IsValid(): boolean;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    version: number;
    sourceId: UnityEngine.Networking.Types.SourceID;
    projectId: string;
    appId: UnityEngine.Networking.Types.AppID;
    accessTokenString: string;
    domain: number;
    // fields
    static currentVersion: number;
  }
}
