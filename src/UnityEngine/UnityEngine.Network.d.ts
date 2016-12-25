declare namespace UnityEngine {
  class Network {
    // constructors
    constructor();
    // methods
    static InitializeServer(connections: number, listenPort: number, useNat: boolean): UnityEngine.NetworkConnectionError;
    static InitializeServer(connections: number, listenPort: number): UnityEngine.NetworkConnectionError;
    static InitializeSecurity(): any;
    static Connect(IP: string, remotePort: number): UnityEngine.NetworkConnectionError;
    static Connect(IP: string, remotePort: number, password: string): UnityEngine.NetworkConnectionError;
    static Connect(IPs: string[], remotePort: number): UnityEngine.NetworkConnectionError;
    static Connect(IPs: string[], remotePort: number, password: string): UnityEngine.NetworkConnectionError;
    static Connect(GUID: string): UnityEngine.NetworkConnectionError;
    static Connect(GUID: string, password: string): UnityEngine.NetworkConnectionError;
    static Connect(hostData: UnityEngine.HostData): UnityEngine.NetworkConnectionError;
    static Connect(hostData: UnityEngine.HostData, password: string): UnityEngine.NetworkConnectionError;
    static Disconnect(timeout: number): any;
    static Disconnect(): any;
    static CloseConnection(target: UnityEngine.NetworkPlayer, sendDisconnectionNotification: boolean): any;
    static AllocateViewID(): UnityEngine.NetworkViewID;
    static Instantiate(prefab: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, group: number): UnityEngine.Object;
    static Destroy(viewID: UnityEngine.NetworkViewID): any;
    static Destroy(gameObject: UnityEngine.GameObject): any;
    static DestroyPlayerObjects(playerID: UnityEngine.NetworkPlayer): any;
    static RemoveRPCs(playerID: UnityEngine.NetworkPlayer): any;
    static RemoveRPCs(playerID: UnityEngine.NetworkPlayer, group: number): any;
    static RemoveRPCs(viewID: UnityEngine.NetworkViewID): any;
    static RemoveRPCsInGroup(group: number): any;
    static SetLevelPrefix(prefix: number): any;
    static GetLastPing(player: UnityEngine.NetworkPlayer): number;
    static GetAveragePing(player: UnityEngine.NetworkPlayer): number;
    static SetReceivingEnabled(player: UnityEngine.NetworkPlayer, group: number, enabled: boolean): any;
    static SetSendingEnabled(group: number, enabled: boolean): any;
    static SetSendingEnabled(player: UnityEngine.NetworkPlayer, group: number, enabled: boolean): any;
    static TestConnection(forceTest: boolean): UnityEngine.ConnectionTesterStatus;
    static TestConnection(): UnityEngine.ConnectionTesterStatus;
    static TestConnectionNAT(forceTest: boolean): UnityEngine.ConnectionTesterStatus;
    static TestConnectionNAT(): UnityEngine.ConnectionTesterStatus;
    static HavePublicAddress(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static incomingPassword: string;
    static logLevel: UnityEngine.NetworkLogLevel;
    static readonly connections: UnityEngine.NetworkPlayer[];
    static readonly player: UnityEngine.NetworkPlayer;
    static readonly isClient: boolean;
    static readonly isServer: boolean;
    static readonly peerType: UnityEngine.NetworkPeerType;
    static sendRate: number;
    static isMessageQueueRunning: boolean;
    static readonly time: number;
    static minimumAllocatableViewIDs: number;
    static useNat: boolean;
    static natFacilitatorIP: string;
    static natFacilitatorPort: number;
    static connectionTesterIP: string;
    static connectionTesterPort: number;
    static maxConnections: number;
    static proxyIP: string;
    static proxyPort: number;
    static useProxy: boolean;
    static proxyPassword: string;
    // fields
  }
}
