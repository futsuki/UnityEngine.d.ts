declare namespace UnityEditor.MemoryProfiler {
  class PackedMemorySnapshot {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly nativeTypes: UnityEditor.MemoryProfiler.PackedNativeType[];
    readonly nativeObjects: UnityEditor.MemoryProfiler.PackedNativeUnityEngineObject[];
    readonly gcHandles: UnityEditor.MemoryProfiler.PackedGCHandle[];
    readonly connections: UnityEditor.MemoryProfiler.Connection[];
    readonly managedHeapSections: UnityEditor.MemoryProfiler.MemorySection[];
    readonly typeDescriptions: UnityEditor.MemoryProfiler.TypeDescription[];
    readonly virtualMachineInformation: UnityEditor.MemoryProfiler.VirtualMachineInformation;
    // fields
  }
}
