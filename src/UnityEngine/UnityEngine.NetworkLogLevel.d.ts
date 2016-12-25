declare namespace UnityEngine {
  class NetworkLogLevel {
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
    static Off: UnityEngine.NetworkLogLevel;
    static Informational: UnityEngine.NetworkLogLevel;
    static Full: UnityEngine.NetworkLogLevel;
  }
}
