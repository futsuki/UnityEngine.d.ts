declare namespace UnityEngine {
  class NetworkView extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    RPC(name: string, mode: UnityEngine.RPCMode, args: any[]): void;
    RPC(name: string, target: UnityEngine.NetworkPlayer, args: any[]): void;
    SetScope(player: UnityEngine.NetworkPlayer, relevancy: boolean): boolean;
    static Find(viewID: UnityEngine.NetworkViewID): UnityEngine.NetworkView;
    // properties
    observed: UnityEngine.Component;
    stateSynchronization: UnityEngine.NetworkStateSynchronization;
    viewID: UnityEngine.NetworkViewID;
    group: number;
    readonly isMine: boolean;
    readonly owner: UnityEngine.NetworkPlayer;
    // fields
  }
}
