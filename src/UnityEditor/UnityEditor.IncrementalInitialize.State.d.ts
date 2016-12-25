declare namespace UnityEditor.IncrementalInitialize {
  class State {
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
    static PreInitialize: UnityEditor.IncrementalInitialize.State;
    static Initialize: UnityEditor.IncrementalInitialize.State;
    static Initialized: UnityEditor.IncrementalInitialize.State;
  }
}
