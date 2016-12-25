declare namespace UnityEditorInternal {
  class ProfilerColumn {
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
    static DontSort: UnityEditorInternal.ProfilerColumn;
    static FunctionName: UnityEditorInternal.ProfilerColumn;
    static TotalPercent: UnityEditorInternal.ProfilerColumn;
    static SelfPercent: UnityEditorInternal.ProfilerColumn;
    static Calls: UnityEditorInternal.ProfilerColumn;
    static GCMemory: UnityEditorInternal.ProfilerColumn;
    static TotalTime: UnityEditorInternal.ProfilerColumn;
    static SelfTime: UnityEditorInternal.ProfilerColumn;
    static DrawCalls: UnityEditorInternal.ProfilerColumn;
    static TotalGPUTime: UnityEditorInternal.ProfilerColumn;
    static SelfGPUTime: UnityEditorInternal.ProfilerColumn;
    static TotalGPUPercent: UnityEditorInternal.ProfilerColumn;
    static SelfGPUPercent: UnityEditorInternal.ProfilerColumn;
    static WarningCount: UnityEditorInternal.ProfilerColumn;
    static ObjectName: UnityEditorInternal.ProfilerColumn;
  }
}
