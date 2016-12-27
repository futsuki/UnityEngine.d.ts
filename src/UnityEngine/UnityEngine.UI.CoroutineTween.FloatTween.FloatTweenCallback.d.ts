declare namespace UnityEngine.UI.CoroutineTween.FloatTween {
  class FloatTweenCallback {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: number) => void)): void;
    RemoveListener(call: ((arg0: number) => void)): void;
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
