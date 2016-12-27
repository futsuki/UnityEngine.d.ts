declare namespace UnityEditor.Scripting.Compilers {
  class ScriptCompilerBase extends System.Object {
    // constructors
    protected constructor();
    // methods
    BeginCompiling(): void;
    Dispose(): void;
    Poll(): boolean;
    GetCompilerMessages(): UnityEditor.Scripting.Compilers.CompilerMessage[];
    // properties
    // fields
  }
}
