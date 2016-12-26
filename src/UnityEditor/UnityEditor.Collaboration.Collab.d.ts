declare namespace UnityEditor.Collaboration {
  class Collab {
    // constructors
    constructor();
    // methods
    GetProjectPath(): string;
    IsConnected(): boolean;
    JobRunning(a_jobID: number): boolean;
    Disconnect(): void;
    GetJobProgress(jobID: number): UnityEditor.Collaboration.ProgressInfo;
    CancelJob(jobID: number): void;
    Publish(comment: string): void;
    Update(revisionID: string, updateToRevision: boolean): void;
    RevertFile(path: string, forceOverwrite: boolean): void;
    GetCollabConflicts(): UnityEditor.Collaboration.Change[];
    SetConflictResolvedMine(path: string): boolean;
    SetConflictsResolvedMine(paths: string[]): boolean;
    SetConflictResolvedTheirs(path: string): boolean;
    SetConflictsResolvedTheirs(paths: string[]): boolean;
    ClearConflictResolved(path: string): boolean;
    ClearConflictsResolved(paths: string[]): boolean;
    LaunchConflictExternalMerge(path: string): void;
    ShowConflictDifferences(path: string): void;
    ShowDifferences(path: string): void;
    GetChangesToPublish(): UnityEditor.Collaboration.Change[];
    ResyncSnapshot(): void;
    GoBackToRevision(revisionID: string, updateToRevision: boolean): void;
    SendNotification(): void;
    ResyncToRevision(revisionID: string): void;
    ClearErrors(): void;
    SetCollabEnabledForCurrentProject(enabled: boolean): void;
    OnPostprocessAssetbundleNameChanged(assetPath: string, previousAssetBundleName: string, newAssetBundleName: string): void;
    GetSoftLocks(assetGuid: string): UnityEditor.Collaboration.SoftLock[];
    WasWhitelistedRequestSent(): boolean;
    GetRevisions(): UnityEditor.Collaboration.Revision[];
    static GetProjectClientType(): string;
    static TestGetRevisions(): void;
    CancelJobWithoutException(jobId: number): void;
    GetAssetState(guid: string): UnityEditor.Collaboration.Collab.CollabStates;
    GetSelectedAssetState(): UnityEditor.Collaboration.Collab.CollabStates;
    UpdateEditorSelectionCache(): void;
    GetCollabInfo(): UnityEditor.Collaboration.CollabInfo;
    static IsDiffToolsAvailable(): boolean;
    SaveAssets(): void;
    static SwitchToDefaultMode(): void;
    LogWarning(warning: string): void;
    LogWarning(warning: string, context: any): void;
    LogError(warning: string): void;
    LogError(warning: string, context: any): void;
    GetVersion(): number;
    GetPostprocessOrder(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly collabInfo: UnityEditor.Collaboration.CollabInfo;
    projectBrowserSingleSelectionPath: string;
    projectBrowserSingleMetaSelectionPath: string;
    static readonly instance: UnityEditor.Collaboration.Collab;
    assetPath: string;
    readonly assetImporter: UnityEditor.AssetImporter;
    preview: any;
    // fields
    currentProjectBrowserSelection: string[];
    static clientType: string[];
  }
}
