declare namespace UnityEngine.Events {
  class PersistentCallGroup {
    // constructors
    constructor();
    // methods
    GetListener(index: number): UnityEngine.Events.PersistentCall;
    GetListeners(): any;
    AddListener(): void;
    AddListener(call: UnityEngine.Events.PersistentCall): void;
    RemoveListener(index: number): void;
    Clear(): void;
    RegisterEventPersistentListener(index: number, targetObj: UnityEngine.Object, methodName: string): void;
    RegisterVoidPersistentListener(index: number, targetObj: UnityEngine.Object, methodName: string): void;
    RegisterObjectPersistentListener(index: number, targetObj: UnityEngine.Object, argument: UnityEngine.Object, methodName: string): void;
    RegisterIntPersistentListener(index: number, targetObj: UnityEngine.Object, argument: number, methodName: string): void;
    RegisterFloatPersistentListener(index: number, targetObj: UnityEngine.Object, argument: number, methodName: string): void;
    RegisterStringPersistentListener(index: number, targetObj: UnityEngine.Object, argument: string, methodName: string): void;
    RegisterBoolPersistentListener(index: number, targetObj: UnityEngine.Object, argument: boolean, methodName: string): void;
    UnregisterPersistentListener(index: number): void;
    RemoveListeners(target: UnityEngine.Object, methodName: string): void;
    Initialize(invokableList: UnityEngine.Events.InvokableCallList, unityEventBase: UnityEngine.Events.UnityEventBase): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Count: number;
    // fields
  }
}
