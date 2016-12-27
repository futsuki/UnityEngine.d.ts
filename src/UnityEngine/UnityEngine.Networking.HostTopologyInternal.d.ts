declare namespace UnityEngine.Networking {
  class HostTopologyInternal extends System.Object {
    // constructors
    constructor(topology: UnityEngine.Networking.HostTopology);
    // methods
    InitWrapper(config: UnityEngine.Networking.ConnectionConfigInternal, maxDefaultConnections: number): void;
    AddSpecialConnectionConfigWrapper(config: UnityEngine.Networking.ConnectionConfigInternal): number;
    InitReceivedPoolSize(pool: number): void;
    InitSentMessagePoolSize(pool: number): void;
    InitMessagePoolSizeGrowthFactor(factor: number): void;
    Dispose(): void;
    // properties
    // fields
  }
}
