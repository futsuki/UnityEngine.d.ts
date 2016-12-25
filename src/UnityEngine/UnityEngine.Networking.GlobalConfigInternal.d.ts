declare namespace UnityEngine.Networking {
  class GlobalConfigInternal {
    // constructors
    constructor(config: UnityEngine.Networking.GlobalConfig);
    // methods
    InitWrapper(): any;
    InitThreadAwakeTimeout(ms: number): any;
    InitReactorModel(model: number): any;
    InitReactorMaximumReceivedMessages(size: number): any;
    InitReactorMaximumSentMessages(size: number): any;
    InitMaxPacketSize(size: number): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
