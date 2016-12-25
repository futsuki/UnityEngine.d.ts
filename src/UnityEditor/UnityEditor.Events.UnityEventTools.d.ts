declare namespace UnityEditor.Events {
  class UnityEventTools {
    // constructors
    private constructor();
    // methods
    static AddPersistentListener(unityEvent: any): any;
    static RemovePersistentListener(unityEvent: any, index: number): any;
    static AddPersistentListener(unityEvent: any, call: any): any;
    static RegisterPersistentListener(unityEvent: any, index: number, call: any): any;
    static RemovePersistentListener(unityEvent: any, call: any): any;
    static UnregisterPersistentListener(unityEvent: any, index: number): any;
    static AddVoidPersistentListener(unityEvent: any, call: any): any;
    static RegisterVoidPersistentListener(unityEvent: any, index: number, call: any): any;
    static AddIntPersistentListener(unityEvent: any, call: any, argument: number): any;
    static RegisterIntPersistentListener(unityEvent: any, index: number, call: any, argument: number): any;
    static AddFloatPersistentListener(unityEvent: any, call: any, argument: number): any;
    static RegisterFloatPersistentListener(unityEvent: any, index: number, call: any, argument: number): any;
    static AddBoolPersistentListener(unityEvent: any, call: any, argument: boolean): any;
    static RegisterBoolPersistentListener(unityEvent: any, index: number, call: any, argument: boolean): any;
    static AddStringPersistentListener(unityEvent: any, call: any, argument: string): any;
    static RegisterStringPersistentListener(unityEvent: any, index: number, call: any, argument: string): any;
    // properties
    // fields
  }
}
