declare namespace UnityEngine.Networking.Match {
  class NetworkMatch extends UnityEngine.MonoBehaviour {
    // constructors
    constructor();
    // methods
    SetProgramAppID(programAppID: UnityEngine.Networking.Types.AppID): void;
    CreateMatch(matchName: string, matchSize: number, matchAdvertise: boolean, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForMatch: number, requestDomain: number, callback: ((success: boolean, extendedInfo: string, responseData: UnityEngine.Networking.Match.MatchInfo) => void)): UnityEngine.Coroutine;
    JoinMatch(netId: UnityEngine.Networking.Types.NetworkID, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForClient: number, requestDomain: number, callback: ((success: boolean, extendedInfo: string, responseData: UnityEngine.Networking.Match.MatchInfo) => void)): UnityEngine.Coroutine;
    DestroyMatch(netId: UnityEngine.Networking.Types.NetworkID, requestDomain: number, callback: ((success: boolean, extendedInfo: string) => void)): UnityEngine.Coroutine;
    DropConnection(netId: UnityEngine.Networking.Types.NetworkID, dropNodeId: UnityEngine.Networking.Types.NodeID, requestDomain: number, callback: ((success: boolean, extendedInfo: string) => void)): UnityEngine.Coroutine;
    ListMatches(startPageNumber: number, resultPageSize: number, matchNameFilter: string, filterOutPrivateMatchesFromResults: boolean, eloScoreTarget: number, requestDomain: number, callback: ((success: boolean, extendedInfo: string, responseData: UnityEngine.Networking.Match.MatchInfoSnapshot[]) => void)): UnityEngine.Coroutine;
    SetMatchAttributes(networkId: UnityEngine.Networking.Types.NetworkID, isListed: boolean, requestDomain: number, callback: ((success: boolean, extendedInfo: string) => void)): UnityEngine.Coroutine;
    // properties
    baseUri: any;
    // fields
  }
}
