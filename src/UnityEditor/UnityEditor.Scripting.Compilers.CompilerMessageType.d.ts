declare namespace UnityEditor.Scripting.Compilers {
  class CompilerMessageType {
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
    static Error: UnityEditor.Scripting.Compilers.CompilerMessageType;
    static Warning: UnityEditor.Scripting.Compilers.CompilerMessageType;
  }
}
