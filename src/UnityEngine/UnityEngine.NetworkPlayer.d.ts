declare namespace UnityEngine {
  class NetworkPlayer extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    // properties
    readonly ipAddress: string;
    readonly port: number;
    readonly guid: string;
    readonly externalIP: string;
    readonly externalPort: number;
    // fields
  }
}
