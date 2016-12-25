declare namespace UnityEngine.Events {
  class PersistentCallGroup {
    // constructors
    constructor();
    // methods
    GetListener(index: number): UnityEngine.Events.PersistentCall;
    GetListeners(): any;
    AddListener(): any;
    AddListener(call: UnityEngine.Events.PersistentCall): any;
    RemoveListener(index: number): any;
    Clear(): any;
    RegisterEventPersistentListener(index: number, targetObj: UnityEngine.Object, methodName: string): any;
    RegisterVoidPersistentListener(index: number, targetObj: UnityEngine.Object, methodName: string): any;
    RegisterObjectPersistentListener(index: number, targetObj: UnityEngine.Object, argument: UnityEngine.Object, methodName: string): any;
    RegisterIntPersistentListener(index: number, targetObj: UnityEngine.Object, argument: number, methodName: string): any;
    RegisterFloatPersistentListener(index: number, targetObj: UnityEngine.Object, argument: number, methodName: string): any;
    RegisterStringPersistentListener(index: number, targetObj: UnityEngine.Object, argument: string, methodName: string): any;
    RegisterBoolPersistentListener(index: number, targetObj: UnityEngine.Object, argument: boolean, methodName: string): any;
    UnregisterPersistentListener(index: number): any;
    RemoveListeners(target: UnityEngine.Object, methodName: string): any;
    Initialize(invokableList: UnityEngine.Events.InvokableCallList, unityEventBase: UnityEngine.Events.UnityEventBase): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Count: number;
    // fields
  }
}
