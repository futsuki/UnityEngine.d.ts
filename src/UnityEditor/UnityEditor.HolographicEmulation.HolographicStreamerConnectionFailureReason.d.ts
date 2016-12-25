declare namespace UnityEditor.HolographicEmulation {
  class HolographicStreamerConnectionFailureReason {
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
    static None: UnityEditor.HolographicEmulation.HolographicStreamerConnectionFailureReason;
    static Unknown: UnityEditor.HolographicEmulation.HolographicStreamerConnectionFailureReason;
    static Unreachable: UnityEditor.HolographicEmulation.HolographicStreamerConnectionFailureReason;
    static HandshakeFailed: UnityEditor.HolographicEmulation.HolographicStreamerConnectionFailureReason;
    static ProtocolVersionMismatch: UnityEditor.HolographicEmulation.HolographicStreamerConnectionFailureReason;
    static ConnectionLost: UnityEditor.HolographicEmulation.HolographicStreamerConnectionFailureReason;
  }
}
