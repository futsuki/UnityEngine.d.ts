declare namespace UnityEngine.Networking {
  class ConnectionConfigInternal {
    // constructors
    constructor(config: UnityEngine.Networking.ConnectionConfig);
    // methods
    InitWrapper(): any;
    AddChannel(value: UnityEngine.Networking.QosType): number;
    GetChannel(i: number): UnityEngine.Networking.QosType;
    InitPacketSize(value: number): any;
    InitFragmentSize(value: number): any;
    InitResendTimeout(value: number): any;
    InitDisconnectTimeout(value: number): any;
    InitConnectTimeout(value: number): any;
    InitMinUpdateTimeout(value: number): any;
    InitPingTimeout(value: number): any;
    InitReducedPingTimeout(value: number): any;
    InitAllCostTimeout(value: number): any;
    InitNetworkDropThreshold(value: number): any;
    InitOverflowDropThreshold(value: number): any;
    InitMaxConnectionAttempt(value: number): any;
    InitAckDelay(value: number): any;
    InitMaxCombinedReliableMessageSize(value: number): any;
    InitMaxCombinedReliableMessageCount(value: number): any;
    InitMaxSentMessageQueueSize(value: number): any;
    InitIsAcksLong(value: boolean): any;
    InitUsePlatformSpecificProtocols(value: boolean): any;
    InitWebSocketReceiveBufferMaxSize(value: number): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ChannelSize: number;
    // fields
  }
}
