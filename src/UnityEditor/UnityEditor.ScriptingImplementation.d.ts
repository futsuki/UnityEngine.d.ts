declare namespace UnityEditor {
  class ScriptingImplementation {
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
    static Mono2x: UnityEditor.ScriptingImplementation;
    static IL2CPP: UnityEditor.ScriptingImplementation;
    static WinRTDotNET: UnityEditor.ScriptingImplementation;
  }
}
