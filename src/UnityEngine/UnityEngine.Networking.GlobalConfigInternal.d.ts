declare namespace UnityEngine.Networking {
  class GlobalConfigInternal extends System.Object {
    // constructors
    constructor(config: UnityEngine.Networking.GlobalConfig);
    // methods
    InitWrapper(): void;
    InitThreadAwakeTimeout(ms: number): void;
    InitReactorModel(model: number): void;
    InitReactorMaximumReceivedMessages(size: number): void;
    InitReactorMaximumSentMessages(size: number): void;
    InitMaxPacketSize(size: number): void;
    Dispose(): void;
    // properties
    // fields
  }
}
