declare namespace UnityEngine.Networking {
  class QosType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Unreliable: UnityEngine.Networking.QosType;
    static UnreliableFragmented: UnityEngine.Networking.QosType;
    static UnreliableSequenced: UnityEngine.Networking.QosType;
    static Reliable: UnityEngine.Networking.QosType;
    static ReliableFragmented: UnityEngine.Networking.QosType;
    static ReliableSequenced: UnityEngine.Networking.QosType;
    static StateUpdate: UnityEngine.Networking.QosType;
    static ReliableStateUpdate: UnityEngine.Networking.QosType;
    static AllCostDelivery: UnityEngine.Networking.QosType;
  }
}
