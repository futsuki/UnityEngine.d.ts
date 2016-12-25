declare namespace UnityEngine {
  class EventModifiers {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEngine.EventModifiers;
    static Shift: UnityEngine.EventModifiers;
    static Control: UnityEngine.EventModifiers;
    static Alt: UnityEngine.EventModifiers;
    static Command: UnityEngine.EventModifiers;
    static Numeric: UnityEngine.EventModifiers;
    static CapsLock: UnityEngine.EventModifiers;
    static FunctionKey: UnityEngine.EventModifiers;
  }
}
