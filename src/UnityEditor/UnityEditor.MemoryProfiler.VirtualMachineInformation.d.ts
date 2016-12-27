declare namespace UnityEditor.MemoryProfiler {
  class VirtualMachineInformation extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
