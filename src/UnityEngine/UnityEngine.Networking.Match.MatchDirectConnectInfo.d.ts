declare namespace UnityEngine.Networking.Match {
  class MatchDirectConnectInfo {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
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
    nodeId: UnityEngine.Networking.Types.NodeID;
    publicAddress: string;
    privateAddress: string;
    hostPriority: UnityEngine.Networking.Types.HostPriority;
    // fields
  }
}
