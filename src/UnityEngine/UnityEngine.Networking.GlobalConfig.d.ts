declare namespace UnityEngine.Networking {
  class GlobalConfig {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    ThreadAwakeTimeout: number;
    ReactorModel: UnityEngine.Networking.ReactorModel;
    ReactorMaximumReceivedMessages: number;
    ReactorMaximumSentMessages: number;
    MaxPacketSize: number;
    // fields
  }
}
