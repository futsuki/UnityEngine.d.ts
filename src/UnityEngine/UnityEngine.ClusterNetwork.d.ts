declare namespace UnityEngine {
  class ClusterNetwork {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isMasterOfCluster: boolean;
    static readonly isDisconnected: boolean;
    static nodeIndex: number;
    // fields
  }
}
