declare namespace UnityEditor.Scripting.Compilers {
  class UnityScriptLanguage extends UnityEditor.Scripting.Compilers.SupportedLanguage {
    // constructors
    constructor();
    // methods
    GetExtensionICanCompile(): string;
    GetLanguageName(): string;
    CreateCompiler(island: UnityEditor.Scripting.MonoIsland, buildingForEditor: boolean, targetPlatform: UnityEditor.BuildTarget, runUpdater: boolean): UnityEditor.Scripting.Compilers.ScriptCompilerBase;
    // properties
    // fields
  }
}
