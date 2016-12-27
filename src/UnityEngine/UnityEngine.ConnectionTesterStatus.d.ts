declare namespace UnityEngine {
  class ConnectionTesterStatus extends System.Enum {
    // constructors
    protected constructor();
    // methods
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
