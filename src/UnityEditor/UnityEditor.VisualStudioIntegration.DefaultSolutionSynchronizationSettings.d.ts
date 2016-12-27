declare namespace UnityEditor.VisualStudioIntegration {
  class DefaultSolutionSynchronizationSettings extends System.Object {
    // constructors
    constructor();
    // methods
    GetProjectHeaderTemplate(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    GetProjectFooterTemplate(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    // properties
    readonly VisualStudioVersion: number;
    readonly SolutionTemplate: string;
    readonly SolutionProjectEntryTemplate: string;
    readonly SolutionProjectConfigurationTemplate: string;
    readonly EditorAssemblyPath: string;
    readonly EngineAssemblyPath: string;
    readonly MonoLibFolder: string;
    readonly Defines: string[];
    // fields
  }
}
