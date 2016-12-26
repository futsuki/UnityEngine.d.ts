declare namespace UnityEngine.Events {
  class PersistentCall {
    // constructors
    constructor();
    // methods
    IsValid(): boolean;
    GetRuntimeCall(theEvent: UnityEngine.Events.UnityEventBase): UnityEngine.Events.BaseInvokableCall;
    RegisterPersistentListener(ttarget: UnityEngine.Object, mmethodName: string): void;
    UnregisterPersistentListener(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly target: UnityEngine.Object;
    readonly methodName: string;
    mode: UnityEngine.Events.PersistentListenerMode;
    readonly "arguments": UnityEngine.Events.ArgumentCache;
    callState: UnityEngine.Events.UnityEventCallState;
    // fields
  }
}
