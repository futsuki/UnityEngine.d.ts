declare namespace UnityEngine.UI.Dropdown {
  class DropdownEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((number) => void)): void;
    RemoveListener(call: ((number) => void)): void;
    Invoke(arg0: number): void;
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
