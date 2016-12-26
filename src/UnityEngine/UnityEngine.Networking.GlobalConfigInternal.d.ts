declare namespace UnityEngine.Networking {
  class GlobalConfigInternal {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
