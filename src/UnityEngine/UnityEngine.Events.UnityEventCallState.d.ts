declare namespace UnityEngine.Events {
  class UnityEventCallState {
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
    static Off: UnityEngine.Events.UnityEventCallState;
    static EditorAndRuntime: UnityEngine.Events.UnityEventCallState;
    static RuntimeOnly: UnityEngine.Events.UnityEventCallState;
  }
}
