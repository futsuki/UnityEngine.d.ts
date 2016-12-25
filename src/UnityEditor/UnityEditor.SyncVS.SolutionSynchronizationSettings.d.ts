declare namespace UnityEditor.SyncVS {
  class SolutionSynchronizationSettings {
    // constructors
    constructor();
    // methods
    GetProjectHeaderTemplate(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    GetProjectFooterTemplate(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly VisualStudioVersion: number;
    readonly SolutionTemplate: string;
    readonly EditorAssemblyPath: string;
    readonly EngineAssemblyPath: string;
    readonly Defines: string[];
    readonly SolutionProjectEntryTemplate: string;
    readonly SolutionProjectConfigurationTemplate: string;
    readonly MonoLibFolder: string;
    // fields
  }
}
