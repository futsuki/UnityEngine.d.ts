declare namespace UnityEngine.EventSystems.EventTrigger {
  class TriggerEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((UnityEngine.EventSystems.BaseEventData) => void)): void;
    RemoveListener(call: ((UnityEngine.EventSystems.BaseEventData) => void)): void;
    Invoke(arg0: UnityEngine.EventSystems.BaseEventData): void;
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
