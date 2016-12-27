declare namespace UnityEngine.UI.CoroutineTween.ColorTween {
  class ColorTweenCallback {
    // constructors
    constructor();
    // methods
    AddListener(call: ((UnityEngine.Color) => void)): void;
    RemoveListener(call: ((UnityEngine.Color) => void)): void;
    Invoke(arg0: UnityEngine.Color): void;
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
