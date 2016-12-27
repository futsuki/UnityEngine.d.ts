declare namespace UnityEngine.Networking {
  class ConnectionConfigInternal extends System.Object {
    // constructors
    constructor(config: UnityEngine.Networking.ConnectionConfig);
    // methods
    InitWrapper(): void;
    AddChannel(value: UnityEngine.Networking.QosType): number;
    GetChannel(i: number): UnityEngine.Networking.QosType;
    InitPacketSize(value: number): void;
    InitFragmentSize(value: number): void;
    InitResendTimeout(value: number): void;
    InitDisconnectTimeout(value: number): void;
    InitConnectTimeout(value: number): void;
    InitMinUpdateTimeout(value: number): void;
    InitPingTimeout(value: number): void;
    InitReducedPingTimeout(value: number): void;
    InitAllCostTimeout(value: number): void;
    InitNetworkDropThreshold(value: number): void;
    InitOverflowDropThreshold(value: number): void;
    InitMaxConnectionAttempt(value: number): void;
    InitAckDelay(value: number): void;
    InitMaxCombinedReliableMessageSize(value: number): void;
    InitMaxCombinedReliableMessageCount(value: number): void;
    InitMaxSentMessageQueueSize(value: number): void;
    InitIsAcksLong(value: boolean): void;
    InitUsePlatformSpecificProtocols(value: boolean): void;
    InitWebSocketReceiveBufferMaxSize(value: number): void;
    Dispose(): void;
    // properties
    readonly ChannelSize: number;
    // fields
  }
}
