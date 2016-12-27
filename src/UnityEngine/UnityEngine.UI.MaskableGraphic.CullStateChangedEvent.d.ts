declare namespace UnityEngine.UI.MaskableGraphic {
  class CullStateChangedEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((boolean) => void)): void;
    RemoveListener(call: ((boolean) => void)): void;
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
