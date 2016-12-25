declare namespace UnityEngine.Networking {
  class HostTopology {
    // constructors
    constructor(defaultConfig: UnityEngine.Networking.ConnectionConfig, maxDefaultConnections: number);
    // methods
    GetSpecialConnectionConfig(i: number): UnityEngine.Networking.ConnectionConfig;
    AddSpecialConnectionConfig(config: UnityEngine.Networking.ConnectionConfig): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly DefaultConfig: UnityEngine.Networking.ConnectionConfig;
    readonly MaxDefaultConnections: number;
    readonly SpecialConnectionConfigsCount: number;
    readonly SpecialConnectionConfigs: any;
    ReceivedMessagePoolSize: number;
    SentMessagePoolSize: number;
    MessagePoolSizeGrowthFactor: number;
    // fields
  }
}
