declare namespace UnityEngine.Networking.Match {
  class DropConnectionResponse {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): any;
    SetSuccess(): any;
    SetFailure(info: string): any;
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
    nodeId: UnityEngine.Networking.Types.NodeID;
    readonly success: boolean;
    readonly extendedInfo: string;
    // fields
  }
}
