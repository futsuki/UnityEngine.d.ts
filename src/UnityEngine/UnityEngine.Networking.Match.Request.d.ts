declare namespace UnityEngine.Networking.Match {
  class Request extends System.Object {
    // constructors
    protected constructor();
    // methods
    IsValid(): boolean;
    ToString(): string;
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
