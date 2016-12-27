declare namespace UnityEngine.UI.Toggle {
  class ToggleEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: boolean) => void)): void;
    RemoveListener(call: ((arg0: boolean) => void)): void;
    Invoke(arg0: boolean): void;
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
