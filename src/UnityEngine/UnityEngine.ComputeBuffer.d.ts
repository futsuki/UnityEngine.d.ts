declare namespace UnityEngine {
  class ComputeBuffer {
    // constructors
    constructor(count: number, stride: number);
    constructor(count: number, stride: number, type: UnityEngine.ComputeBufferType);
    // methods
    Dispose(): any;
    Release(): any;
    SetData(data: any): any;
    SetCounterValue(counterValue: number): any;
    GetData(data: any): any;
    static CopyCount(src: UnityEngine.ComputeBuffer, dst: UnityEngine.ComputeBuffer, dstOffset: number): any;
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
