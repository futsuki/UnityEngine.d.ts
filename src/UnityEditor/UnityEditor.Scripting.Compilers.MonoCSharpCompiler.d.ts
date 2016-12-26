declare namespace UnityEditor.Scripting.Compilers {
  class MonoCSharpCompiler {
    // constructors
    constructor(island: UnityEditor.Scripting.MonoIsland, runUpdater: boolean);
    // methods
    static Compile(sources: string[], references: string[], defines: string[], outputFile: string): string[];
    BeginCompiling(): void;
    Dispose(): void;
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
