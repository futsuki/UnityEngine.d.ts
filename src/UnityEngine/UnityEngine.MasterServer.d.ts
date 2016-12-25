declare namespace UnityEngine {
  class MasterServer {
    // constructors
    constructor();
    // methods
    static RequestHostList(gameTypeName: string): any;
    static PollHostList(): UnityEngine.HostData[];
    static RegisterHost(gameTypeName: string, gameName: string, comment: string): any;
    static RegisterHost(gameTypeName: string, gameName: string): any;
    static UnregisterHost(): any;
    static ClearHostList(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static ipAddress: string;
    static port: number;
    static updateRate: number;
    static dedicatedServer: boolean;
    // fields
  }
}
