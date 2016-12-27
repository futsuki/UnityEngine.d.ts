declare namespace UnityEditor.Scripting.Compilers {
  class MonoCSharpCompiler extends UnityEditor.Scripting.Compilers.MonoScriptCompilerBase {
    // constructors
    constructor(island: UnityEditor.Scripting.MonoIsland, runUpdater: boolean);
    // methods
    static Compile(sources: string[], references: string[], defines: string[], outputFile: string): string[];
    // properties
    // fields
  }
}
