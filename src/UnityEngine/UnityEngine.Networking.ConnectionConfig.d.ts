declare namespace UnityEngine.Networking {
  class ConnectionConfig {
    // constructors
    constructor();
    constructor(config: UnityEngine.Networking.ConnectionConfig);
    // methods
    static Validate(config: UnityEngine.Networking.ConnectionConfig): any;
    AddChannel(value: UnityEngine.Networking.QosType): number;
    GetChannel(idx: number): UnityEngine.Networking.QosType;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    PacketSize: number;
    FragmentSize: number;
    ResendTimeout: number;
    DisconnectTimeout: number;
    ConnectTimeout: number;
    MinUpdateTimeout: number;
    PingTimeout: number;
    ReducedPingTimeout: number;
    AllCostTimeout: number;
    NetworkDropThreshold: number;
    OverflowDropThreshold: number;
    MaxConnectionAttempt: number;
    AckDelay: number;
    MaxCombinedReliableMessageSize: number;
    MaxCombinedReliableMessageCount: number;
    MaxSentMessageQueueSize: number;
    IsAcksLong: boolean;
    UsePlatformSpecificProtocols: boolean;
    WebSocketReceiveBufferMaxSize: number;
    readonly ChannelCount: number;
    readonly Channels: any;
    // fields
  }
}
