declare namespace UnityEditor.Scripting.Compilers {
  class CompilerMessage extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
