declare namespace UnityEditor.MemoryProfiler {
  class MemorySection {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly bytes: number[];
    readonly startAddress: number;
    // fields
  }
}
