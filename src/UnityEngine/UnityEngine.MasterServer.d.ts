declare namespace UnityEngine {
  class MasterServer extends System.Object {
    // constructors
    constructor();
    // methods
    static RequestHostList(gameTypeName: string): void;
    static PollHostList(): UnityEngine.HostData[];
    static RegisterHost(gameTypeName: string, gameName: string, comment: string): void;
    static RegisterHost(gameTypeName: string, gameName: string): void;
    static UnregisterHost(): void;
    static ClearHostList(): void;
    // properties
    static ipAddress: string;
    static port: number;
    static updateRate: number;
    static dedicatedServer: boolean;
    // fields
  }
}
