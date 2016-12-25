declare namespace UnityEngine.Networking {
  class ChannelQOS {
    // constructors
    constructor(value: UnityEngine.Networking.QosType);
    constructor();
    constructor(channel: UnityEngine.Networking.ChannelQOS);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly QOS: UnityEngine.Networking.QosType;
    // fields
  }
}
