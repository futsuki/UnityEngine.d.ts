declare namespace UnityEditor.Scripting.Compilers {
  class CompilerMessage {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    message: string;
    file: string;
    line: number;
    column: number;
    type: UnityEditor.Scripting.Compilers.CompilerMessageType;
    normalizedStatus: UnityEditor.Scripting.Compilers.NormalizedCompilerStatus;
  }
}
