declare namespace UnityEditor.MemoryProfiler {
  class VirtualMachineInformation {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly pointerSize: number;
    readonly objectHeaderSize: number;
    readonly arrayHeaderSize: number;
    readonly arrayBoundsOffsetInHeader: number;
    readonly arraySizeOffsetInHeader: number;
    readonly allocationGranularity: number;
    readonly heapFormatVersion: number;
    // fields
  }
}
