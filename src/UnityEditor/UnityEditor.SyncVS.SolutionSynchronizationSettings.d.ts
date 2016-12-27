declare namespace UnityEditor.SyncVS {
  class SolutionSynchronizationSettings extends UnityEditor.VisualStudioIntegration.DefaultSolutionSynchronizationSettings {
    // constructors
    constructor();
    // methods
    GetProjectHeaderTemplate(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    GetProjectFooterTemplate(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    // properties
    readonly VisualStudioVersion: number;
    readonly SolutionTemplate: string;
    readonly EditorAssemblyPath: string;
    readonly EngineAssemblyPath: string;
    readonly Defines: string[];
    // fields
  }
}
