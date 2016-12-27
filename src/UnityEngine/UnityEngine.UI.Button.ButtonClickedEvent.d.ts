declare namespace UnityEngine.UI.Button {
  class ButtonClickedEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: (() => void)): void;
    RemoveListener(call: (() => void)): void;
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
