declare namespace UnityEngine {
  class RPCMode {
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
    static Server: UnityEngine.RPCMode;
    static Others: UnityEngine.RPCMode;
    static OthersBuffered: UnityEngine.RPCMode;
    static All: UnityEngine.RPCMode;
    static AllBuffered: UnityEngine.RPCMode;
  }
}
