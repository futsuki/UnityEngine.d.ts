declare namespace UnityEditor.Scripting.Compilers {
  class SupportedLanguage {
    // constructors
    private constructor();
    // methods
    GetExtensionICanCompile(): string;
    GetLanguageName(): string;
    CreateCompiler(island: UnityEditor.Scripting.MonoIsland, buildingForEditor: boolean, targetPlatform: UnityEditor.BuildTarget, runUpdater: boolean): UnityEditor.Scripting.Compilers.ScriptCompilerBase;
    GetNamespace(fileName: string, definedSymbols: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
