declare namespace UnityEngine.Events {
  class PersistentCall extends System.Object {
    // constructors
    constructor();
    // methods
    IsValid(): boolean;
    GetRuntimeCall(theEvent: UnityEngine.Events.UnityEventBase): UnityEngine.Events.BaseInvokableCall;
    RegisterPersistentListener(ttarget: UnityEngine.Object, mmethodName: string): void;
    UnregisterPersistentListener(): void;
    // properties
    readonly target: UnityEngine.Object;
    readonly methodName: string;
    mode: UnityEngine.Events.PersistentListenerMode;
    readonly "arguments": UnityEngine.Events.ArgumentCache;
    callState: UnityEngine.Events.UnityEventCallState;
    // fields
  }
}
