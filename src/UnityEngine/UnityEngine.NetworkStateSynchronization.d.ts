declare namespace UnityEngine {
  class NetworkStateSynchronization {
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
    static Off: UnityEngine.NetworkStateSynchronization;
    static ReliableDeltaCompressed: UnityEngine.NetworkStateSynchronization;
    static Unreliable: UnityEngine.NetworkStateSynchronization;
  }
}
