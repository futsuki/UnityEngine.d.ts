declare namespace UnityEngine.Networking {
  class HostTopologyInternal {
    // constructors
    constructor(topology: UnityEngine.Networking.HostTopology);
    // methods
    InitWrapper(config: UnityEngine.Networking.ConnectionConfigInternal, maxDefaultConnections: number): void;
    AddSpecialConnectionConfigWrapper(config: UnityEngine.Networking.ConnectionConfigInternal): number;
    InitReceivedPoolSize(pool: number): void;
    InitSentMessagePoolSize(pool: number): void;
    InitMessagePoolSizeGrowthFactor(factor: number): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
