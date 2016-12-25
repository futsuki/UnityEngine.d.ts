declare namespace UnityEngine.Events {
  class PersistentListenerMode {
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
    static EventDefined: UnityEngine.Events.PersistentListenerMode;
    static Void: UnityEngine.Events.PersistentListenerMode;
    static Object: UnityEngine.Events.PersistentListenerMode;
    static Int: UnityEngine.Events.PersistentListenerMode;
    static Float: UnityEngine.Events.PersistentListenerMode;
    static String: UnityEngine.Events.PersistentListenerMode;
    static Bool: UnityEngine.Events.PersistentListenerMode;
  }
}
