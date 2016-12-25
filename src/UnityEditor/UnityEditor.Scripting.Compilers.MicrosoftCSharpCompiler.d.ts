declare namespace UnityEditor.Scripting.Compilers {
  class MicrosoftCSharpCompiler {
    // constructors
    constructor(island: UnityEditor.Scripting.MonoIsland, runUpdater: boolean);
    // methods
    BeginCompiling(): any;
    Dispose(): any;
    Poll(): boolean;
    GetCompilerMessages(): UnityEditor.Scripting.Compilers.CompilerMessage[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
