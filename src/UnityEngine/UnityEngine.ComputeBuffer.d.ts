declare namespace UnityEngine {
  class ComputeBuffer {
    // constructors
    constructor(count: number, stride: number);
    constructor(count: number, stride: number, type: UnityEngine.ComputeBufferType);
    // methods
    Dispose(): void;
    Release(): void;
    SetData(data: any): void;
    SetCounterValue(counterValue: number): void;
    GetData(data: any): void;
    static CopyCount(src: UnityEngine.ComputeBuffer, dst: UnityEngine.ComputeBuffer, dstOffset: number): void;
    GetNativeBufferPtr(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly count: number;
    readonly stride: number;
    // fields
  }
}
