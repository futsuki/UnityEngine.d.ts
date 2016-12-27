declare namespace UnityEngine.Networking {
  class HostTopology extends System.Object {
    // constructors
    constructor(defaultConfig: UnityEngine.Networking.ConnectionConfig, maxDefaultConnections: number);
    // methods
    GetSpecialConnectionConfig(i: number): UnityEngine.Networking.ConnectionConfig;
    AddSpecialConnectionConfig(config: UnityEngine.Networking.ConnectionConfig): number;
    // properties
    readonly DefaultConfig: UnityEngine.Networking.ConnectionConfig;
    readonly MaxDefaultConnections: number;
    readonly SpecialConnectionConfigsCount: number;
    readonly SpecialConnectionConfigs: UnityEngine.Networking.ConnectionConfig[];
    ReceivedMessagePoolSize: number;
    SentMessagePoolSize: number;
    MessagePoolSizeGrowthFactor: number;
    // fields
  }
}
