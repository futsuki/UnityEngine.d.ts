declare namespace UnityEngine.Networking.Match {
  class ListMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    pageSize: number;
    pageNum: number;
    nameFilter: string;
    filterOutPrivateMatches: boolean;
    eloScore: number;
    matchAttributeFilterLessThan: any;
    matchAttributeFilterEqualTo: any;
    matchAttributeFilterGreaterThan: any;
    // fields
    includePasswordMatches: boolean;
  }
}
