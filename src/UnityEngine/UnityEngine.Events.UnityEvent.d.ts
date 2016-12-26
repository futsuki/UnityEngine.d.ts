declare namespace UnityEngine.Events {
  class UnityEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: UnityEngine.Events.UnityAction): void;
    RemoveListener(call: UnityEngine.Events.UnityAction): void;
    Invoke(): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
