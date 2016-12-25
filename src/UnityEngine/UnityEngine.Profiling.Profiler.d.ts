declare namespace UnityEngine.Profiling {
  class Profiler {
    // constructors
    constructor();
    // methods
    static AddFramesFromFile(file: string): any;
    static BeginSample(name: string): any;
    static BeginSample(name: string, targetObject: UnityEngine.Object): any;
    static EndSample(): any;
    static GetRuntimeMemorySize(o: UnityEngine.Object): number;
    static GetMonoHeapSize(): number;
    static GetMonoUsedSize(): number;
    static SetTempAllocatorRequestedSize(size: number): boolean;
    static GetTempAllocatorSize(): number;
    static GetTotalAllocatedMemory(): number;
    static GetTotalUnusedReservedMemory(): number;
    static GetTotalReservedMemory(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly supported: boolean;
    static logFile: string;
    static enableBinaryLog: boolean;
    static enabled: boolean;
    static maxNumberOfSamplesPerFrame: number;
    static readonly usedHeapSize: number;
    // fields
  }
}