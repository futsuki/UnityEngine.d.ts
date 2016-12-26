declare namespace UnityEditor.Events {
  class UnityEventTools {
    // constructors
    private constructor();
    // methods
    static AddPersistentListener(unityEvent: any): void;
    static RemovePersistentListener(unityEvent: any, index: number): void;
    static AddPersistentListener(unityEvent: any, call: any): void;
    static RegisterPersistentListener(unityEvent: any, index: number, call: any): void;
    static RemovePersistentListener(unityEvent: any, call: any): void;
    static UnregisterPersistentListener(unityEvent: any, index: number): void;
    static AddVoidPersistentListener(unityEvent: any, call: any): void;
    static RegisterVoidPersistentListener(unityEvent: any, index: number, call: any): void;
    static AddIntPersistentListener(unityEvent: any, call: any, argument: number): void;
    static RegisterIntPersistentListener(unityEvent: any, index: number, call: any, argument: number): void;
    static AddFloatPersistentListener(unityEvent: any, call: any, argument: number): void;
    static RegisterFloatPersistentListener(unityEvent: any, index: number, call: any, argument: number): void;
    static AddBoolPersistentListener(unityEvent: any, call: any, argument: boolean): void;
    static RegisterBoolPersistentListener(unityEvent: any, index: number, call: any, argument: boolean): void;
    static AddStringPersistentListener(unityEvent: any, call: any, argument: string): void;
    static RegisterStringPersistentListener(unityEvent: any, index: number, call: any, argument: string): void;
    // properties
    // fields
  }
}
