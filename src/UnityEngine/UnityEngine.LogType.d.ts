declare namespace UnityEngine {
  class LogType {
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
    static Error: UnityEngine.LogType;
    static Assert: UnityEngine.LogType;
    static Warning: UnityEngine.LogType;
    static Log: UnityEngine.LogType;
    static Exception: UnityEngine.LogType;
  }
}
