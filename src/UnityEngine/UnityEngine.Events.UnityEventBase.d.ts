declare namespace UnityEngine.Events {
  class UnityEventBase {
    // constructors
    private constructor();
    // methods
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    static GetValidMethodInfo(obj: any, functionName: string, argumentTypes: any[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
