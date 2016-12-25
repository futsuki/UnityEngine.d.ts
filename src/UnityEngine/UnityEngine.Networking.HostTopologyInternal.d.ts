declare namespace UnityEngine.Networking {
  class HostTopologyInternal {
    // constructors
    constructor(topology: UnityEngine.Networking.HostTopology);
    // methods
    InitWrapper(config: UnityEngine.Networking.ConnectionConfigInternal, maxDefaultConnections: number): any;
    AddSpecialConnectionConfigWrapper(config: UnityEngine.Networking.ConnectionConfigInternal): number;
    InitReceivedPoolSize(pool: number): any;
    InitSentMessagePoolSize(pool: number): any;
    InitMessagePoolSizeGrowthFactor(factor: number): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
