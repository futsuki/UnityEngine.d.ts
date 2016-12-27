declare namespace UnityEngine.UI.InputField {
  class OnChangeEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: string) => void)): void;
    RemoveListener(call: ((arg0: string) => void)): void;
    Invoke(arg0: string): void;
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
