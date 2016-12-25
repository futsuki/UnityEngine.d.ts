declare namespace UnityEditorInternal {
  class ProfilerArea {
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
    static CPU: UnityEditorInternal.ProfilerArea;
    static GPU: UnityEditorInternal.ProfilerArea;
    static Rendering: UnityEditorInternal.ProfilerArea;
    static Memory: UnityEditorInternal.ProfilerArea;
    static Audio: UnityEditorInternal.ProfilerArea;
    static Physics: UnityEditorInternal.ProfilerArea;
    static Physics2D: UnityEditorInternal.ProfilerArea;
    static NetworkMessages: UnityEditorInternal.ProfilerArea;
    static NetworkOperations: UnityEditorInternal.ProfilerArea;
    static AreaCount: UnityEditorInternal.ProfilerArea;
  }
}
