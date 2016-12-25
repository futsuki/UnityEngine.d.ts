declare namespace UnityEditor.HolographicEmulation {
  class HolographicStreamerConnectionState {
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
    static Disconnected: UnityEditor.HolographicEmulation.HolographicStreamerConnectionState;
    static Connecting: UnityEditor.HolographicEmulation.HolographicStreamerConnectionState;
    static Connected: UnityEditor.HolographicEmulation.HolographicStreamerConnectionState;
  }
}
