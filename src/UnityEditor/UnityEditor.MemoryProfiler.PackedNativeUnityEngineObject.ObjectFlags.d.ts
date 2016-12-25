declare namespace UnityEditor.MemoryProfiler.PackedNativeUnityEngineObject {
  class ObjectFlags {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static IsDontDestroyOnLoad: UnityEditor.MemoryProfiler.PackedNativeUnityEngineObject.ObjectFlags;
    static IsPersistent: UnityEditor.MemoryProfiler.PackedNativeUnityEngineObject.ObjectFlags;
    static IsManager: UnityEditor.MemoryProfiler.PackedNativeUnityEngineObject.ObjectFlags;
  }
}
