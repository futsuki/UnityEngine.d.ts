declare namespace UnityEngine.Networking {
  class NetworkTransport {
    // constructors
    private constructor();
    // methods
    static ConnectEndPoint(hostId: number, endPoint: any, exceptionConnectionId: number, error: any): number;
    static Init(): any;
    static Init(config: UnityEngine.Networking.GlobalConfig): any;
    static Shutdown(): any;
    static GetAssetId(go: UnityEngine.GameObject): string;
    static AddSceneId(id: number): any;
    static GetNextSceneId(): number;
    static ConnectAsNetworkHost(hostId: number, address: string, port: number, network: UnityEngine.Networking.Types.NetworkID, source: UnityEngine.Networking.Types.SourceID, node: UnityEngine.Networking.Types.NodeID, error: any): any;
    static DisconnectNetworkHost(hostId: number, error: any): any;
    static ReceiveRelayEventFromHost(hostId: number, error: any): UnityEngine.Networking.NetworkEventType;
    static ConnectToNetworkPeer(hostId: number, address: string, port: number, exceptionConnectionId: number, relaySlotId: number, network: UnityEngine.Networking.Types.NetworkID, source: UnityEngine.Networking.Types.SourceID, node: UnityEngine.Networking.Types.NodeID, bytesPerSec: number, bucketSizeFactor: number, error: any): number;
    static ConnectToNetworkPeer(hostId: number, address: string, port: number, exceptionConnectionId: number, relaySlotId: number, network: UnityEngine.Networking.Types.NetworkID, source: UnityEngine.Networking.Types.SourceID, node: UnityEngine.Networking.Types.NodeID, error: any): number;
    static GetCurrentIncomingMessageAmount(): number;
    static GetCurrentOutgoingMessageAmount(): number;
    static GetCurrentRtt(hostId: number, connectionId: number, error: any): number;
    static GetNetworkLostPacketNum(hostId: number, connectionId: number, error: any): number;
    static GetPacketSentRate(hostId: number, connectionId: number, error: any): number;
    static GetPacketReceivedRate(hostId: number, connectionId: number, error: any): number;
    static GetRemotePacketReceivedRate(hostId: number, connectionId: number, error: any): number;
    static GetNetIOTimeuS(): number;
    static GetConnectionInfo(hostId: number, connectionId: number, address: any, port: any, network: any, dstNode: any, error: any): any;
    static GetConnectionInfo(hostId: number, connectionId: number, port: any, network: any, dstNode: any, error: any): string;
    static GetNetworkTimestamp(): number;
    static GetRemoteDelayTimeMS(hostId: number, connectionId: number, remoteTime: number, error: any): number;
    static StartSendMulticast(hostId: number, channelId: number, buffer: number[], size: number, error: any): boolean;
    static SendMulticast(hostId: number, connectionId: number, error: any): boolean;
    static FinishSendMulticast(hostId: number, error: any): boolean;
    static AddWebsocketHost(topology: UnityEngine.Networking.HostTopology, port: number): number;
    static AddWebsocketHost(topology: UnityEngine.Networking.HostTopology, port: number, ip: string): number;
    static AddHost(topology: UnityEngine.Networking.HostTopology, port: number): number;
    static AddHost(topology: UnityEngine.Networking.HostTopology): number;
    static AddHost(topology: UnityEngine.Networking.HostTopology, port: number, ip: string): number;
    static AddHostWithSimulator(topology: UnityEngine.Networking.HostTopology, minTimeout: number, maxTimeout: number, port: number): number;
    static AddHostWithSimulator(topology: UnityEngine.Networking.HostTopology, minTimeout: number, maxTimeout: number): number;
    static AddHostWithSimulator(topology: UnityEngine.Networking.HostTopology, minTimeout: number, maxTimeout: number, port: number, ip: string): number;
    static RemoveHost(hostId: number): boolean;
    static Connect(hostId: number, address: string, port: number, exeptionConnectionId: number, error: any): number;
    static ConnectWithSimulator(hostId: number, address: string, port: number, exeptionConnectionId: number, error: any, conf: UnityEngine.Networking.ConnectionSimulatorConfig): number;
    static Disconnect(hostId: number, connectionId: number, error: any): boolean;
    static Send(hostId: number, connectionId: number, channelId: number, buffer: number[], size: number, error: any): boolean;
    static Receive(hostId: any, connectionId: any, channelId: any, buffer: number[], bufferSize: number, receivedSize: any, error: any): UnityEngine.Networking.NetworkEventType;
    static ReceiveFromHost(hostId: number, connectionId: any, channelId: any, buffer: number[], bufferSize: number, receivedSize: any, error: any): UnityEngine.Networking.NetworkEventType;
    static SetPacketStat(direction: number, packetStatId: number, numMsgs: number, numBytes: number): any;
    static StartBroadcastDiscovery(hostId: number, broadcastPort: number, key: number, version: number, subversion: number, buffer: number[], size: number, timeout: number, error: any): boolean;
    static StopBroadcastDiscovery(): any;
    static IsBroadcastDiscoveryRunning(): boolean;
    static SetBroadcastCredentials(hostId: number, key: number, version: number, subversion: number, error: any): any;
    static GetBroadcastConnectionInfo(hostId: number, port: any, error: any): string;
    static GetBroadcastConnectionInfo(hostId: number, address: any, port: any, error: any): any;
    static GetBroadcastConnectionMessage(hostId: number, buffer: number[], bufferSize: number, receivedSize: any, error: any): any;
    // properties
    // fields
  }
}
