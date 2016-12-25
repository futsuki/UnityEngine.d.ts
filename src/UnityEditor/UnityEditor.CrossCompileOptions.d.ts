declare namespace UnityEditor {
  class CrossCompileOptions {
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
    static Dynamic: UnityEditor.CrossCompileOptions;
    static FastICall: UnityEditor.CrossCompileOptions;
    static Static: UnityEditor.CrossCompileOptions;
    static Debugging: UnityEditor.CrossCompileOptions;
    static ExplicitNullChecks: UnityEditor.CrossCompileOptions;
    static LoadSymbols: UnityEditor.CrossCompileOptions;
  }
}
