declare namespace UnityEngine.UI.ScrollRect {
  class ScrollRectEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((UnityEngine.Vector2) => void)): void;
    RemoveListener(call: ((UnityEngine.Vector2) => void)): void;
    Invoke(arg0: UnityEngine.Vector2): void;
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
