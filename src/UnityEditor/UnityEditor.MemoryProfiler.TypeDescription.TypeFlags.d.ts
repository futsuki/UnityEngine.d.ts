declare namespace UnityEditor.MemoryProfiler.TypeDescription {
  class TypeFlags {
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
    static kNone: UnityEditor.MemoryProfiler.TypeDescription.TypeFlags;
    static kValueType: UnityEditor.MemoryProfiler.TypeDescription.TypeFlags;
    static kArray: UnityEditor.MemoryProfiler.TypeDescription.TypeFlags;
    static kArrayRankMask: UnityEditor.MemoryProfiler.TypeDescription.TypeFlags;
  }
}
