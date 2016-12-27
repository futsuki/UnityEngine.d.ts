declare namespace UnityEngine.Events {
  class UnityEventBase extends System.Object {
    // constructors
    protected constructor();
    // methods
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: any): void;
    RemoveAllListeners(): void;
    ToString(): string;
    static GetValidMethodInfo(obj: any, functionName: string, argumentTypes: any[]): any;
    // properties
    // fields
  }
}
