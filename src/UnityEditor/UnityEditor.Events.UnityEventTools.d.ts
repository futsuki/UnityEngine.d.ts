declare namespace UnityEditor.Events {
  class UnityEventTools {
    // constructors
    private constructor();
    // methods
    static AddPersistentListener(unityEvent: any): void;
    static RemovePersistentListener(unityEvent: any, index: number): void;
    static AddPersistentListener(unityEvent: any, call: (() => void)): void;
    static RegisterPersistentListener(unityEvent: any, index: number, call: (() => void)): void;
    static RemovePersistentListener(unityEvent: any, call: (() => void)): void;
    static UnregisterPersistentListener(unityEvent: any, index: number): void;
    static AddVoidPersistentListener(unityEvent: any, call: (() => void)): void;
    static RegisterVoidPersistentListener(unityEvent: any, index: number, call: (() => void)): void;
    static AddIntPersistentListener(unityEvent: any, call: ((number) => void), argument: number): void;
    static RegisterIntPersistentListener(unityEvent: any, index: number, call: ((number) => void), argument: number): void;
    static AddFloatPersistentListener(unityEvent: any, call: ((number) => void), argument: number): void;
    static RegisterFloatPersistentListener(unityEvent: any, index: number, call: ((number) => void), argument: number): void;
    static AddBoolPersistentListener(unityEvent: any, call: ((boolean) => void), argument: boolean): void;
    static RegisterBoolPersistentListener(unityEvent: any, index: number, call: ((boolean) => void), argument: boolean): void;
    static AddStringPersistentListener(unityEvent: any, call: ((string) => void), argument: string): void;
    static RegisterStringPersistentListener(unityEvent: any, index: number, call: ((string) => void), argument: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
