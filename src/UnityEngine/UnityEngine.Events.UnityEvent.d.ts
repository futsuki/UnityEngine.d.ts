declare namespace UnityEngine.Events {
  class UnityEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: UnityEngine.Events.UnityAction): any;
    RemoveListener(call: UnityEngine.Events.UnityAction): any;
    Invoke(): any;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): any;
    RemoveAllListeners(): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
