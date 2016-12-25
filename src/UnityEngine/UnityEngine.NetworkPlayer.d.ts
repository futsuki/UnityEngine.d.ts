declare namespace UnityEngine {
  class NetworkPlayer {
    // constructors
    private constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    GetType(): any;
    // properties
    readonly ipAddress: string;
    readonly port: number;
    readonly guid: string;
    readonly externalIP: string;
    readonly externalPort: number;
    // fields
  }
}
