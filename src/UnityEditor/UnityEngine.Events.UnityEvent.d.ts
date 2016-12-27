declare namespace UnityEngine.Events {
  class UnityEvent extends UnityEngine.Events.UnityEventBase {
    // constructors
    constructor();
    // methods
    AddListener(call: (() => void)): void;
    RemoveListener(call: (() => void)): void;
    Invoke(): void;
    // properties
    // fields
  }
}
