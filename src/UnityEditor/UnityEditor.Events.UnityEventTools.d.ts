declare namespace UnityEditor.Events {
  class UnityEventTools extends System.Object {
    // constructors
    protected constructor();
    // methods
    static AddPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase): void;
    static AddPersistentListener(unityEvent: UnityEngine.Events.UnityEvent, call: (() => void)): void;
    static RemovePersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number): void;
    static RemovePersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, call: (() => void)): void;
    static RegisterPersistentListener(unityEvent: UnityEngine.Events.UnityEvent, index: number, call: (() => void)): void;
    static UnregisterPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number): void;
    static AddVoidPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, call: (() => void)): void;
    static RegisterVoidPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number, call: (() => void)): void;
    static AddIntPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, call: ((arg0: number) => void), argument: number): void;
    static RegisterIntPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number, call: ((arg0: number) => void), argument: number): void;
    static AddFloatPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, call: ((arg0: number) => void), argument: number): void;
    static RegisterFloatPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number, call: ((arg0: number) => void), argument: number): void;
    static AddBoolPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, call: ((arg0: boolean) => void), argument: boolean): void;
    static RegisterBoolPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number, call: ((arg0: boolean) => void), argument: boolean): void;
    static AddStringPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, call: ((arg0: string) => void), argument: string): void;
    static RegisterStringPersistentListener(unityEvent: UnityEngine.Events.UnityEventBase, index: number, call: ((arg0: string) => void), argument: string): void;
    // properties
    // fields
  }
}
