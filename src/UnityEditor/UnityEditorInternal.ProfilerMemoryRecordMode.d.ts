declare namespace UnityEditorInternal {
  class ProfilerMemoryRecordMode {
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
    static None: UnityEditorInternal.ProfilerMemoryRecordMode;
    static SampleOnly: UnityEditorInternal.ProfilerMemoryRecordMode;
    static CallstackFast: UnityEditorInternal.ProfilerMemoryRecordMode;
    static CallstackFull: UnityEditorInternal.ProfilerMemoryRecordMode;
  }
}
