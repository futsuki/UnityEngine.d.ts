declare namespace UnityEditor.MemoryProfiler {
  class PackedMemorySnapshot extends System.Object {
    // constructors
    protected constructor();
    // methods
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
