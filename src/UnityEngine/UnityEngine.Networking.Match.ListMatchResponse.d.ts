declare namespace UnityEngine.Networking.Match {
  class ListMatchResponse extends UnityEngine.Networking.Match.BasicResponse {
    // constructors
    constructor();
    constructor(otherMatches: UnityEngine.Networking.Match.MatchDesc[]);
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    matches: UnityEngine.Networking.Match.MatchDesc[];
    // fields
  }
}
