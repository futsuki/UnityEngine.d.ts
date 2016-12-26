declare namespace UnityEditor.MemoryProfiler {
  class MemorySnapshot {
    // constructors
    private constructor();
    // methods
    static RequestNewSnapshot(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
