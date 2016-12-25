declare namespace UnityEngine.Networking.Match {
  class MatchDesc {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): any;
    ParseJSONString(name: string, obj: any, dictJsonObj: any): string;
    ParseJSONInt16(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONInt32(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONInt64(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt16(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt32(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt64(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONBool(name: string, obj: any, dictJsonObj: any): boolean;
    ParseJSONDateTime(name: string, obj: any, dictJsonObj: any): any;
    ParseJSONListOfStrings(name: string, obj: any, dictJsonObj: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    name: string;
    averageEloScore: number;
    maxSize: number;
    currentSize: number;
    isPrivate: boolean;
    matchAttributes: any;
    hostNodeId: UnityEngine.Networking.Types.NodeID;
    directConnectInfos: any;
    // fields
  }
}
