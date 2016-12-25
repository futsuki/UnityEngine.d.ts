declare namespace UnityEngine {
  class ComputeBufferType {
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
    static Default: UnityEngine.ComputeBufferType;
    static Raw: UnityEngine.ComputeBufferType;
    static Append: UnityEngine.ComputeBufferType;
    static Counter: UnityEngine.ComputeBufferType;
    static DrawIndirect: UnityEngine.ComputeBufferType;
    static IndirectArguments: UnityEngine.ComputeBufferType;
    static GPUMemory: UnityEngine.ComputeBufferType;
  }
}
