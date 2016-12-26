declare namespace UnityEditor.VisualStudioIntegration {
  class SolutionSynchronizer {
    // constructors
    constructor(projectDirectory: string, settings: UnityEditor.VisualStudioIntegration.ISolutionSynchronizationSettings);
    constructor(projectDirectory: string);
    // methods
    ShouldFileBePartOfSolution(file: string): boolean;
    ProjectExists(island: UnityEditor.Scripting.MonoIsland): boolean;
    SolutionExists(): boolean;
    SyncIfNeeded(affectedFiles: any): boolean;
    Sync(): void;
    ProjectFile(island: UnityEditor.Scripting.MonoIsland): string;
    static IsManagedAssembly(file: string): boolean;
    static GetProjectExtension(language: UnityEditor.VisualStudioIntegration.ScriptingLanguage): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static DefaultSynchronizationSettings: UnityEditor.VisualStudioIntegration.ISolutionSynchronizationSettings;
    static MSBuildNamespaceUri: string;
    static scriptReferenceExpression: any;
  }
}
