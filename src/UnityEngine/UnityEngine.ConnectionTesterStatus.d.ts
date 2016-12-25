declare namespace UnityEngine {
  class ConnectionTesterStatus {
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
    static Error: UnityEngine.ConnectionTesterStatus;
    static Undetermined: UnityEngine.ConnectionTesterStatus;
    static PrivateIPNoNATPunchthrough: UnityEngine.ConnectionTesterStatus;
    static PrivateIPHasNATPunchThrough: UnityEngine.ConnectionTesterStatus;
    static PublicIPIsConnectable: UnityEngine.ConnectionTesterStatus;
    static PublicIPPortBlocked: UnityEngine.ConnectionTesterStatus;
    static PublicIPNoServerStarted: UnityEngine.ConnectionTesterStatus;
    static LimitedNATPunchthroughPortRestricted: UnityEngine.ConnectionTesterStatus;
    static LimitedNATPunchthroughSymmetric: UnityEngine.ConnectionTesterStatus;
    static NATpunchthroughFullCone: UnityEngine.ConnectionTesterStatus;
    static NATpunchthroughAddressRestrictedCone: UnityEngine.ConnectionTesterStatus;
  }
}
