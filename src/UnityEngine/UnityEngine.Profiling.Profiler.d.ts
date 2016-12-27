declare namespace UnityEngine.Profiling {
  class Profiler extends System.Object {
    // constructors
    constructor();
    // methods
    static AddFramesFromFile(file: string): void;
    static BeginSample(name: string): void;
    static BeginSample(name: string, targetObject: UnityEngine.Object): void;
    static EndSample(): void;
    static GetRuntimeMemorySize(o: UnityEngine.Object): number;
    static GetMonoHeapSize(): number;
    static GetMonoUsedSize(): number;
    static SetTempAllocatorRequestedSize(size: number): boolean;
    static GetTempAllocatorSize(): number;
    static GetTotalAllocatedMemory(): number;
    static GetTotalUnusedReservedMemory(): number;
    static GetTotalReservedMemory(): number;
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
