declare namespace UnityEditorInternal {
  class ProfilerMemoryView {
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
    static Simple: UnityEditorInternal.ProfilerMemoryView;
    static Detailed: UnityEditorInternal.ProfilerMemoryView;
  }
}
