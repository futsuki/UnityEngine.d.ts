declare namespace UnityEngine.Networking.Match {
  class ListMatchRequest {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    pageSize: number;
    pageNum: number;
    nameFilter: string;
    filterOutPrivateMatches: boolean;
    eloScore: number;
    matchAttributeFilterLessThan: any;
    matchAttributeFilterEqualTo: any;
    matchAttributeFilterGreaterThan: any;
    version: number;
    sourceId: UnityEngine.Networking.Types.SourceID;
    projectId: string;
    appId: UnityEngine.Networking.Types.AppID;
    accessTokenString: string;
    domain: number;
    // fields
    includePasswordMatches: boolean;
  }
}
